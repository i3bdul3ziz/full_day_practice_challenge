require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const authRoutes = require('./routes/auth.route')
const itemsRoutes = require('./routes/items.route')
const session = require("express-session")
const flash = require('connect-flash')
let passport = require("./config/passportConfig")
const app = express()
/*

*/
mongoose.connect(process.env.mongoDBURL,
  {useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true},
  () => {
  console.log('mongodb running')
  },
  err => {
      console.log(err)
  }
)

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(expressLayouts)

/*-- These must be place in the correct place */
app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 360000 }
  })
);
//-- passport initialization
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(request, response, next) {
  // before every route, attach the flash messages and current user to res.locals
  response.locals.alerts = request.flash();
  response.locals.currentUser = request.user;
  next();
});

app.use(authRoutes)
app.use(itemsRoutes)

app.get('*', (req, res) => {
    res.send('does not exist')
})

app.listen(process.env.PORT, () =>
  console.log(`connected to express on ${PORT}`)
);
