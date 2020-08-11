const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
var session = require("express-session");
const passport = require("passport");
const todoRoutes = require('./routes/todo')
const errorHandler = require("errorhandler");
var corsOptions = {
  origin: "http://localhost:8081"
};
 mongoose.promise = global.Promise;
 mongoose.set("debug", true);


 const isProduction = process.env.NODE_ENV === "production";
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({
  secret:"Our little secret.",
  resave: false,
  saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session());

require('./models/Users')
require('./config/passport');
app.use(require('./routes'));

const db = require("./models/index");
const User = db.users;
// const { session } = require('passport');
if (!isProduction) {
  app.use(errorHandler());
}


// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

db.mongoose
  .connect(process.env.MONGODB_URI || db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
const PORT = process.env.PORT || 8081;
if (!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}
app.use((err, req, res) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});
app.use("/todos", todoRoutes);
require("./routes/issue.routers")(app);
require("./routes/project.routers")(app);
// require("./routes/auth")(app);
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});








