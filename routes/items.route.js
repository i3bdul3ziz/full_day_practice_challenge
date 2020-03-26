const router = require("express").Router();
// const passport = require("../config/passportConfig");
const isLoggedIn = require("../config/loginBlocker");
const User = require('../models/user.model')
const Item = require('../models/items.model')

router.get('/items', (req, res) =>{
        res.render('items/index')
})


router.get('/items/create', (req, res) =>{
        res.render('items/create')
})

router.post('/items/create', (req, res) =>{
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



router.get('/items/:id/edit', (req, res) =>{
    res.render('items/edit')
})

router.post('/items/:id/edit', (req, res) =>{
    Item.findByIdAndUpdate(req.params.id).then(item => {
        item.quantity = req.body.quantity
        item.deliveryDate = req.body.deliveryDate
    }).catch(err => {
        console.log(err)
    })
})


module.exports = router