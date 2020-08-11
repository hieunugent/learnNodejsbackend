// const db = require("../models/index");
// const User = db.users;

// // 

// exports.logOut = (req, res) => {
//     req.logout();
//     res.redirect("/logins")
// };
// exports.registrations = (req, res) => {
//      User.register(
//        {username : req.body.username},
//         req.body.password ,  
//        function (err, user) {
//          if (err) {
//            console.log(err);
//            res.redirect("/register");
//          } else {
//            passport.authenticate("local")(req, res, function () {
//              res.redirect("/");
//            });
//          }
//        }
//      );
// };
// exports.logIn = (req, res) => {
//     const user = new User({
//       username : req.body.username,
//       password: req.body.password,
//     });

//     req.login(user, function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         passport.authenticate("local")(req, res, function () {
//           res.redirect("/");
//         });
//       }
//     });
// };
// exports.submit =(req, res)=> {
//     if (req.isAuthenticated()) {
//       res.redirect("/");
//     } else {
//       res.redirect("/login");
//     }
// };