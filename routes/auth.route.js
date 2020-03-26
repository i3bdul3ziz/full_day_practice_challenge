const express = require("express")
const router = express.Router()
const passport = require("../config/passportConfig");
// const isLoggedIn = require("../config/loginBlocker");
const User = require('../models/user.model')

router.get('/auth/signup', (req, res) => {
  res.render('auth/signup')
})

router.post("/auth/signup",(req, res) => {

  //print error msg if the user enter invalid info
  // const errors = validationResult(req);
  // console.log(errors);
  // if (!errors.isEmpty()) {
  //   req.flash("autherror", errors.errors);
  //   return res.redirect("/auth/signup");
  // }
    console.log(req.body);

  let user = new User(req.body);
  user
    .save()
    .then(() => {
      passport.authenticate("local", {
        successRedirect: "/auth/signin",
        successFlash: 'Account created and you have logged in!'
      })(req, res)
    })
    .catch(err => {
      console.log(err);
      
      // if the email exists print flash msg and
      // redirect to signup page again
      // if (err.code == 11000) {
      //   console.log("Email Exists");
      //   request.flash("error", "Email Exists");
      //   return response.redirect("/auth/signup");
      // }
      res.send("error!!!");
    });
});

router.get('/auth/signin', (req, res) => {
  res.render('auth/signin')
})

//-- Login Route
router.post("/auth/signin",
  passport.authenticate("local", {
    successRedirect: "/items", //after login success
    failureRedirect: "/auth/sign", //if fail
    // failureFlash: "Invalid Username or Password",
    // successFlash: "You have logged In!"
  })
  );

//--- Logout Route
router.get("/auth/logout", (request, response) => {
  request.logout(); //clear and break session
  request.flash("success", "Dont leave please come back!");
  response.redirect("/auth/signin");
});


module.exports = router