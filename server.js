require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 5000;

//DB conneted
const db = require('./app/models'); //server จะมองหา File index เป็น File แรก
db.sequelize.sync({force: false}).then(()=> {
    console.log("DB Conneted!")
});

//Routes 
require('./app/routers/user.routers')(app);

app.listen(PORT, () => console.log('Server is running ' + PORT));