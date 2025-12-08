// controllers/weatherController.js
const Weather = require("../models/Weather");

// GET /weather
exports.getAllWeather = async (req, res) => {
  try {
    const items = await Weather.find().sort({ createdAt: 1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /weather/:id
exports.getWeatherById = async (req, res) => {
  try {
    const item = await Weather.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /weather
exports.createWeather = async (req, res) => {
  try {
    const { day, date, weather, temp, desc } = req.body;
    const newItem = new Weather({ day, date, weather, temp, desc });
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /weather/:id
exports.updateWeather = async (req, res) => {
  try {
    const updated = await Weather.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /weather/:id
exports.deleteWeather = async (req, res) => {
  try {
    const deleted = await Weather.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
