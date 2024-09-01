import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import dbConfig from "../config/config";
import { products } from "../models/product";
import { User } from "../models/user.model";

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        port: dbConfig.port,
        models:[products, User],
        dialect: dbConfig.dialect,
        dialectOptions: {
            connectTimeout: 10000,
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

export default sequelize;