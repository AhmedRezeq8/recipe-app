import { DataTypes } from "sequelize";
import { define } from "../database";
import Recipe, { hasMany } from "./Recipe";

const Ingredient = define(
  "Ingredient",
  {
    ingredient_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "Ingredients",
  }
);

hasMany(Ingredient, { foreignKey: "recipe_id" });
Ingredient.belongsTo(Recipe, { foreignKey: "recipe_id" });

export default Ingredient;
