const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequela = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql", 
        logging: process.env.NODE_ENV === "development",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000, 
            idle: 10000
        }
    }
)

module.exports = sequela;