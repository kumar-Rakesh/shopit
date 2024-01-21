import axios from "axios";

const url = "http://localhost:3000/shopit";

const API = axios.create({ baseURL: url });

export const getProducts = async () => API.get("/product");

export const getOrders = async () => API.get("/order");

export const addOrder = async (orderReq) => API.post("/order", orderReq);
