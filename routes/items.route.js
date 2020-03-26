const router = require("express").Router();
// const passport = require("../config/passportConfig");
const isLoggedIn = require("../config/loginBlocker");
const User = require('../models/user.model')
const Item = require('../models/items.model')

router.get('/:id/items', (req, res) =>{
    res.render('items')
})

