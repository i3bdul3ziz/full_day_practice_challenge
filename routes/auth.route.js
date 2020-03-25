const router = require("express").Router();
const passport = require("../config/passportConfig");
const isLoggedIn = require("../config/loginBlocker");

//-- Login Route
router.post(
  "/auth/signin",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/auth/signin",
    failureFlash: "Invalid Username or Password",
    successFlash: "You have logged In!"
  })
);

//--- Logout Route
router.get("/auth/logout", (request, response) => {
  request.logout(); //clear and break session
  request.flash("success", "Yay! your out!");
  response.redirect("/auth/signin");
});
