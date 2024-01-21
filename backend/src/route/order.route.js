const express = require("express");
const { addOrder, getOrders } = require("../controller/order.controller");
const router = express.Router();

router.get("/order", getOrders);
router.post("/order", addOrder);

module.exports = router;
