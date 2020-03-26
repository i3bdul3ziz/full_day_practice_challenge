const mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
       
          
               items:
                   {
                       item:String,
                       quantity: Number
                   }
               ,
               deliveryDate:Date,
               status:{Type:Number,
                default:0
                
            }  // 0/ 1 / 2
           
      
})


const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
