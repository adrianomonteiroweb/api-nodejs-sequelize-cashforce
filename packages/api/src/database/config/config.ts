import dotenv from 'dotenv';
import path from 'path';
import { Sequelize, Dialect } from 'sequelize';

dotenv.config({ path: path.join(__dirname, '../../../../../.env') });

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASS as string;
const dbHost = process.env.DB_HOST as string;
const dbPort = Number(process.env.DB_PORT) as number;
const dbDriver = process.env.DB_DRIVER as Dialect;

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDriver,
});
