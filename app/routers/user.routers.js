const controllers = require("../controllers/user.controllers");

module.exports = (app) => {
    app.get("/", controllers.home);
    app.get("/about", controllers.about);
    app.get("/contact", controllers.contact);
};