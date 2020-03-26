const mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
        lists: [
            {
               items:[
                   {
                       item: String,
                       quantity: Number
                   }
               ],
               deliveryDate:String,
               status: 0 // 0/ 1 / 2
            }
       ]
    }
)


const Item = mongoose.model("Item", itemSchema);
module.exports = Item;