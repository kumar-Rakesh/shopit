const Order = require("../model/order.model");

const addOrder = async (req, res) => {
  const body = req.body;
  const orderReq = new Order(body);
  try {
    const savedOrder = await orderReq.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addOrder, getOrders };
