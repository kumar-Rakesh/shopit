const express = require("express");

const { addProduct, getProducts } = require("../controller/product.controller");

const router = express.Router();

router.get("/product", getProducts);
router.post("/product", addProduct);

module.exports = router;
