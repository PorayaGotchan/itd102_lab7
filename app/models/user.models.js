const { sequelize, datatype } = require(".");

module.exports = () => {
    const User = sequelize.define("uewrs",{
        id: {
            type: datatype.INTEGER, //type ของ id
            autoIncrement: true,
            allowNull: false,  //ไม่อนุญาตให้ค่าว่าง
            primaryKey: true
        },
        name: {
            type: datatype.STRING,
            allowNall: false,

        }
    });
    return User;
;}