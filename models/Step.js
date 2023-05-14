import { DataTypes } from "sequelize";
import { define } from "../database.js";
import Recipe, { hasMany } from "./Recipe.js";

const Step = define(
  "Step",
  {
    step_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    step_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instruction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "Steps",
  }
);

hasMany(Step, { foreignKey: "recipe_id" });
Step.belongsTo(Recipe, { foreignKey: "recipe_id" });

export default Step;
