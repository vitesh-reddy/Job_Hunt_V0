require('dotenv').config();
const fs = require('fs');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const logger = require('./config/logger.config');
const connectDB = require('./config/db.config');
const loggerMiddleware = require('./middlewares/logger.middleware');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const userJobRoutes = require('./routes/userJob.routes');
const resumeRoutes = require('./routes/resume.routes');
const coverLetterRoutes = require('./routes/coverLetter.routes');
const templateRoutes = require('./routes/template.routes');

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));

// Middlewares
app.use(cookieParser());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

// ---------------- logger for debugging start --------------------------------

if (!fs.existsSync('logs')) fs.mkdirSync('logs'); 
const stream = {write: (message) => logger.info(message.trim())};
const morganFormat = ':method :url :status :res[content-length] - :response-time ms';
app.use(morgan(morganFormat, { stream }));

// ---------------- logger for debugging end --------------------------------

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/userJobs', userJobRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/coverLetters', coverLetterRoutes);
app.use('/api/templates', templateRoutes);


// --------------- these should be at end ------------------------

app.use((err, _, res, __) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(loggerMiddleware);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jobhunt';

connectDB(MONGODB_URI).then(() => {
  app.listen(PORT, () => {
    logger.info(`Server running at http://localhost:${PORT}`);
  });
});