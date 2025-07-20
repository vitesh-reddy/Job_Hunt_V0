const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
  employmentStatus: { type: String, enum: ['Yes', 'No'] },
  employmentType: { type: String, enum: ['Full-Time', 'Internship'] },
  companyName: { type: String },
  jobTitle: { type: String },
  startingDate: {
    month: { type: Number },
    year: { type: Number }
  },
  endingDate: {
    month: { type: Number },
    year: { type: Number }
  },
  salary: {
    currency: { type: String },
    amount: { type: Number }
  },
  jobProfile: { type: String }
}, { _id: false });

module.exports = workExperienceSchema;
