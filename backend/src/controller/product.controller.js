const Product = require("../model/product.model");

const addProduct = async (req, res) => {
  const body = req.body;
  const productReq = new Product(body);
  try {
    const product = await productReq.save();
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addProduct, getProducts };
