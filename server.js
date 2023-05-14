import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");
const stepRoutes = require("./routes/stepRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

app.use("/api", userRoutes);
app.use("/api", recipeRoutes);
app.use("/api", ingredientRoutes);
app.use("/api", stepRoutes);
app.use("/api", reviewRoutes);
