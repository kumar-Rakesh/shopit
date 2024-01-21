const { Schema, model } = require("mongoose");
const { ProductSchema } = require("./product.model");

const OrderSchema = new Schema({
  products: {
    type: Map,
    of: String | Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
  },
});

const Order = model("Order", OrderSchema);

module.exports = Order;
