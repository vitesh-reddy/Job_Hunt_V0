const mongoose = require('mongoose');

const coverLetterSchema = new mongoose.Schema({
  userId: { type: String, default: "Common" },
  style: { type: String },
  createdAt: { type: Date, default: Date.now },
});

coverLetterSchema.index({ userId: 1 });

module.exports = mongoose.model('CoverLetter', coverLetterSchema);