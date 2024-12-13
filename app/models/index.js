const config = require('../config/db');  //ย้อนกลับไปอีกไฟล์ ใช้.. 2จุด เพื่อย้อนกลับ 

const datatype = require("sequelize");  // ใช้ Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, and Snowflake
const sequelize = new datatype(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
);

const db ={}; //

db.datatype = datatype;
db.sequelize = sequelize;

db.user = require("./user.models")(sequelize,);

module.exports = db;