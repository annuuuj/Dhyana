const Journal = require('../models/Journal');

const saveJournal = async (req, res) => {
  try {
    const { title, content, date } = req.body;

    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    const newEntry = new Journal({ title, content, date });
    await newEntry.save();

    res.status(201).json({ message: "Journal entry saved", data: newEntry });
  } catch (err) {
    console.error("Failed to save journal:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { saveJournal };
