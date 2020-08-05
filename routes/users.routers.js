module.exports = (app) => {
    const users = require("../controllers/users.controller.js");
     var router = require("express").Router();

     // create a new user
     router.post("/", users.registrations);
     // login 
     router.post("/", users.logIn);
     //logout
     router.post("/",users.logOut)
     

}