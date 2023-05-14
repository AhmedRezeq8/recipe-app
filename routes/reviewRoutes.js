const express = require("express");
const router = express.Router();
const Review = require("../models/Review.js");

// CREATE
router.post("/reviews", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ
router.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
router.put("/reviews/:id", async (req, res) => {
  try {
    await Review.update(req.body, { where: { review_id: req.params.id } });
    res.json({ message: "Review updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE
router.delete("/reviews/:id", async (req, res) => {
  try {
    await Review.destroy({ where: { review_id: req.params.id } });
    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
