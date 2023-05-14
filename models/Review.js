import { DataTypes } from "sequelize";
import { define } from "../database";
import User, { hasMany } from "./User";
import Recipe, { hasMany as _hasMany } from "./Recipe";

const Review = define(
  "Review",
  {
    review_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
    tableName: "Reviews",
  }
);

hasMany(Review, { foreignKey: "user_id" });
Review.belongsTo(User, { foreignKey: "user_id" });

_hasMany(Review, { foreignKey: "recipe_id" });
Review.belongsTo(Recipe, { foreignKey: "recipe_id" });

export default Review;
