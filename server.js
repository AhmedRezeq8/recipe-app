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

import userRoutes from "./routes/userRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";
// import ingredientRoutes from "./routes/ingredientRoutes.js";
// import stepRoutes from "./routes/stepRoutes.js";
// import reviewRoutes from "./routes/reviewRoutes.js";

app.use("/api", userRoutes);
app.use("/api", recipeRoutes);
// app.use("/api", ingredientRoutes);
// app.use("/api", stepRoutes);
// app.use("/api", reviewRoutes);
