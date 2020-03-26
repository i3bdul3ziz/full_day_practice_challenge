const router = require("express").Router();
// const passport = require("../config/passportConfig");
const isLoggedIn = require("../config/loginBlocker");
const User = require('../models/user.model')
const Item = require('../models/items.model')

router.get('/items', (req, res) =>{
    Item.find().then((item) => {
        res.render('items/index', {item})
    })
})


router.get('/items/create', (req, res) =>{
        res.render('items/create')
})

router.post('/items/create', (req, res) =>{
    console.log(req.body)
    let item = new Item(req.body)
    console.log(item.lists.items[0].item)
    item.lists.forEach((element, i) => {
        item.lists[i].items[i].item = req.body.item
        Item.lists[i].items[i].quantity = req.body.quantity
        Item.lists[i].deliveryDate = req.body.deliveryDate
        Item.lists[i].status = 0
    });
    // save item
    item
        .save()
        .then(() => {
        res.redirect('/items')
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