const { Schema, model } = require("mongoose");


const orderSchema = new Schema(
  {
    purchaseDate: {
      type: Date,
      default: Date.now
    },
    customerFirstName: {
      type: String,
      required: true,
      maxlength: 60,
    },
    customerLastName: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required:true
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
module.exports = Order;
