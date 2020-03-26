const mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
        lists: [
            {
               items:[
                   {
                       item: "",
                       quantity: 0
                   }
               ],
               deliveryDate:"",
               status: 0 // 0/ 1 / 2
            }
       ]
})


const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
