const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

<<<<<<< HEAD
=======
const orderSchema = new Schema(
  {
    purchaseDate: {
      type: Date,
      default: Date.now
    },
   
    status: {
      type: Number,
      default: 0,
    },

    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  }
);

const Order = model("Order", orderSchema);
>>>>>>> main
module.exports = Order;
