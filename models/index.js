const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");


mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.issues = require("./issue.model.js")(mongoose);
db.projects = require("./project.model.js")(mongoose);
// db.users = require("./Users.js")(mongoose);

module.exports = db;
