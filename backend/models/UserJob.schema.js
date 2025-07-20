const mongoose = require('mongoose');

const userJobSchema = new mongoose.Schema({
  // set to scraped if applied from scraped job listing, or set to custom if added manually
  type: { 
    type: String, required: true,
    enum: ['scraped', 'custom'],
  },

  // if type is scraped, get job data using reference 
  scrapedJobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ScrapedJob', default: null
  },

  //if type is custom, get job data from below fields
  role: { type: String, trim: true, default: null },
  companyName: { type: String, trim: true, default: null },
  jobURL: { type: String, trim: true, default: null },
  location: { type: String, trim: true, default: null },
  salary: {
    min: { type: String, default: null },
    max: { type: String, default: null }
  },
  jobType: {
    type: String, default: 'Full-Time',
    enum: ['Full-Time', 'Part-Time', 'Internship', 'Contract', 'Freelance'],
  },
  description: { type: String, trim: true, default: null },

  // below fields are common for both scaped and custom job
  currentStatus: {type: String, required: null},
  status: [
    {
      type: { type: String, required: true},
      date: { type: Date, default: null },
      _id: false
    }, 
  ],

  notes: [  
    {
      content: { type: String, trim: true, maxlength: 500 },
      editedAt: { type: Date, default: Date.now }
    }
  ],

  messages: [
    {
      content: { type: String, trim: true },
      editedAt: { type: Date, default: Date.now }
    }
  ],
}, { timestamps: true });

module.exports = userJobSchema;