require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const morgan = require('morgan');

const Job = require('./models/Job');
const Resume = require('./models/Resume');
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes')

const app = express();
const upload = multer({ dest: 'uploads/' });

// ✅ MIDDLEWARE ORDER MATTERS
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json()); // Must be before any routes
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// ✅ Connect MongoDB
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', () => console.error('Error connecting to database'));
db.once('open', () => console.log('Connected to database'));

// ✅ Mount routes with a base path (recommended)
app.use('/api/auth', authRoutes);

// ✅ Scraper site configs
const options = [
    {
        url: 'https://www.foundit.in/srp/results?query=%22%22&quickApplyJobs=true',
        parentSelector: '.infoSection',
        titleSelector: '.jobTitle',
        companySelector: '.companyName > p',
        linkSelector: 'a.jobTupleHeader',
    },
    {
        url: 'https://internshala.com/jobs//',
        parentSelector: '.company',
        titleSelector: '.job-title-href',
        companySelector: '.company-name',
        linkSelector: '.job-title-href',
    },
    {
        url: 'https://www.quikr.com/jobs/full-time+zwqxj2363381545',
        parentSelector: '.job-card',
        titleSelector: '.job-title',
        companySelector: '.company-name',
        linkSelector: 'a.job-title',
    },
    {
        url: 'https://www.linkedin.com/jobs/search?trk=guest_homepage-basic_guest_nav_menu_jobs&position=1&pageNum=0',
        loginRequired: false,
        parentSelector: '.jobs-search__results-list li',
        titleSelector: '.base-search-card__title',
        companySelector: '.base-search-card__subtitle',
        linkSelector: '.base-card__full-link',
    },
];

// ✅ Scraper function
const scrapData = async (site) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(site.url);
    const content = await page.content();
    const $ = cheerio.load(content);
    const jobs = [];

    $(site.parentSelector).each((index, element) => {
        const jobTitle = $(element).find(site.titleSelector).text().trim();
        const companyName = $(element).find(site.companySelector).text().trim();
        const link = $(element).find(site.linkSelector).attr('href');
        jobs.push({
            jobTitle,
            companyName,
            link,
            site: site.url.split('/')[2],
        });
    });

    await browser.close();
    return jobs;
};

// ✅ Routes

app.get('/scrape', async (req, res) => {
    const query = req.query.q;
    if (!query) return res.status(400).send('Query parameter is required');

    try {
        const scrapedJobs = [];
        const target = options.find(option => option.url.includes(query));
        if (!target) return res.status(404).send('No matching site found');

        const jobs = await scrapData(target);
        const savedJobs = [];

        for (let job of jobs) {
            const jobData = {
                jobTitle: job.jobTitle,
                companyName: job.companyName,
                link: job.link,
                site: job.site,
            };

            const newJob = new Job(jobData);
            const saved = await newJob.save();
            savedJobs.push(saved);
        }

        res.send({ message: 'Data scraped successfully', jobs: savedJobs });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error scraping data');
    }
});

app.get('/search', async (req, res) => {
    try {
        const search = req.query.search?.toLowerCase() || '';
        const searchResult = await Job.find({
            jobTitle: { $regex: search, $options: 'i' },
        });
        res.send(searchResult);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error in searching job');
    }
});

app.get('/jobs/:id', async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) return res.status(404).send('Job not found');
        res.send(job);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error in fetching job');
    }
});

app.post('/upload-resume', async (req, res) => {
    try {
        const { template, data, userId } = req.body;

        if (!template || !data || !userId) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newResume = new Resume({
            template,
            data, // Use data directly, no JSON.parse needed
            userId,
        });

        await newResume.save();

        res.status(201).json({
            success: true,
            message: "Resume uploaded successfully!",
            resumeId: newResume._id,
        });
    } catch (error) {
        console.error("Error uploading resume:", error);
        res.status(500).json({ error: "Failed to upload resume" });
    }
});
app.use('/api/resumes', resumeRoutes);

// ✅ Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// ✅ Start server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
