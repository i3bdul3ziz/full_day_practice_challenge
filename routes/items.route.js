const router = require("express").Router();
// const passport = require("../config/passportConfig");
const isLoggedIn = require("../config/loginBlocker");
const User = require('../models/user.model')
const Item = require('../models/items.model')

router.get('/:id/items', (req, res) =>{
    User.findById(req.params.id).then(item => {
        res.render('items/index')
    })
})


router.get('/:id/items/create', (req, res) =>{
    User.findById(req.params.id).then(item => {
        res.render('items/create')
    })
})

router.post('/:id/items/create', (req, res) =>{
    User.findById(req.params.id).then(() => {
    let item = new Item(req.body)
    // save item
    item
        .save()
        .then(() => {
        res.redirect('/:id/items')
        })
        .catch( err => {
            console.log(err)
            res.send('Error!!!!!!')
        })
    })
})