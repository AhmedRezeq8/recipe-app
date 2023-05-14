const express = require("express");
const router = express.Router();
const Step = require("../models/Step.js");

// CREATE
router.post("/steps", async (req, res) => {
  try {
    const step = await Step.create(req.body);
    res.status(201).json(step);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ
router.get("/steps", async (req, res) => {
  try {
    const steps = await Step.findAll();
    res.json(steps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
router.put("/steps/:id", async (req, res) => {
  try {
    await Step.update(req.body, { where: { step_id: req.params.id } });
    res.json({ message: "Step updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE
router.delete("/steps/:id", async (req, res) => {
  try {
    await Step.destroy({ where: { step_id: req.params.id } });
    res.json({ message: "Step deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
