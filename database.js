import { Sequelize } from "sequelize";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

export default sequelize;
