const mongoose = require("mongoose");
const { Schema } = mongoose;
const  Product  = require ('./Product.js')
const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: Product
    }
  ],
  note: {
    type: String
  },
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;