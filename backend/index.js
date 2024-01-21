const express = require("express");
const cors = require("cors");
const { connect, connection } = require("mongoose");
const postRoutes = require("./src/route/product.route");
const orderRoutes = require("./src/route/order.route");

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use("/shopit", postRoutes);
app.use("/shopit", orderRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));

connect(
  "mongodb+srv://learningsmart:juMHvdnXFifkl5so@learningsmart.clmwn.mongodb.net/ShopIt?retryWrites=true&w=majority"
);

connection.once("open", () => console.log("Database connected successfully!!"));
