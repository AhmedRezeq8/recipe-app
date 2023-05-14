import { Router } from "express";
const router = Router();
import { create, findAll, update, destroy } from "../models/User";

// CREATE
router.post("/users", async (req, res) => {
  try {
    const user = await create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ
router.get("/users", async (req, res) => {
  try {
    const users = await findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
router.put("/users/:id", async (req, res) => {
  try {
    await update(req.body, { where: { user_id: req.params.id } });
    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE
router.delete("/users/:id", async (req, res) => {
  try {
    await destroy({ where: { user_id: req.params.id } });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
