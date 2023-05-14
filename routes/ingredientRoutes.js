const express = require("express");
const router = express.Router();
const Ingredient = require("../models/Ingredient");

// CREATE
router.post("/ingredients", async (req, res) => {
  try {
    const ingredient = await Ingredient.create(req.body);
    res.status(201).json(ingredient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ
router.get("/ingredients", async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll();
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
router.put("/ingredients/:id", async (req, res) => {
  try {
    await Ingredient.update(req.body, {
      where: { ingredient_id: req.params.id },
    });
    res.json({ message: "Ingredient updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE
router.delete("/ingredients/:id", async (req, res) => {
  try {
    await Ingredient.destroy({ where: { ingredient_id: req.params.id } });
    res.json({ message: "Ingredient deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
