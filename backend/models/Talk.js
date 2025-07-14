const mongoose = require('mongoose');

const talkSchema = new mongoose.Schema({
  feelings: [String],
  feelingsDescription: String,
  problems: [String],
  problemsDescription: String,
  seekingSpecialist: String,
  specialistType: String,
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  preferredContact: String,
  availability: String,
  agreePrivacy: { type: Boolean, required: true },
  agreeEmergencyDisclaimer: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Talk', talkSchema);
