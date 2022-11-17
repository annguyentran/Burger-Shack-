const { Schema, model } = require("mongoose");


const orderSchema = new Schema(
  {
    customerName: {
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
  },

);
const Order = model("Order", orderSchema);
module.exports = Order;
