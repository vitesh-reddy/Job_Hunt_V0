const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  userId: { type: String, default: "Common" },
  style: { type: String },
  createdAt: { type: Date, default: Date.now },
});

templateSchema.index({ userId: 1 });

module.exports = mongoose.model('Template', templateSchema);