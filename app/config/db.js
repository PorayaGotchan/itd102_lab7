const { use } = require("express/lib/application");

module.exports = {
    HOST: "127.0.0.1",  //ถ้าลงในเครื่องตัวเอง คือ localhost ถ้าเครื่องเพื่อนให้ใส่ IP 
    USER: "postgres",
    PASSWORD: "1234",
    DB: "db_itd102",
    dialect: "postgres" //ตัวบอกtype
};