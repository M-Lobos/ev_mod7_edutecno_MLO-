import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

export const dbConfig = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
});
