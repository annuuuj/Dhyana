const Talk = require('../models/Talk');

const submitTalkForm = async (req, res) => {
  try {
    const data = req.body;

    if (!data.fullName || !data.email) {
      return res.status(400).json({ message: 'Full Name and Email are required.' });
    }

    if (!data.agreePrivacy || !data.agreeEmergencyDisclaimer) {
      return res.status(400).json({ message: 'Consent checkboxes must be agreed.' });
    }

    const newTalk = new Talk(data);
    await newTalk.save();
    console.log(req.body);

    res.status(201).json({ message: 'Your request has been submitted successfully.' });
  } catch (err) {
    console.error("Error saving Talk form:", err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { submitTalkForm };
