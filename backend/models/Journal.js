const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String, required: true },
  date: { type: String, default: () => new Date().toISOString().split('T')[0] }, // YYYY-MM-DD
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Journal', journalSchema);
