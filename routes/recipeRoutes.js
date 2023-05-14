import { Router } from "express";
const router = Router();
import { create, findAll, update, destroy } from "../models/Recipe";

// CREATE
router.post("/recipes", async (req, res) => {
  try {
    const recipe = await create(req.body);
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ
router.get("/recipes", async (req, res) => {
  try {
    const recipes = await findAll();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
router.put("/recipes/:id", async (req, res) => {
  try {
    await update(req.body, { where: { recipe_id: req.params.id } });
    res.json({ message: "Recipe updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE
router.delete("/recipes/:id", async (req, res) => {
  try {
    await destroy({ where: { recipe_id: req.params.id } });
    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
