const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    template: String,
    data: Object, // Stores the entire resume JSON
    userId: String,
    filePath: String, // If storing files
    filename: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Resume', resumeSchema);