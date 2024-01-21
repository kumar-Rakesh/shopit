import { useContext, useEffect, useState } from "react";
import { getProducts, getOrders } from "../api/api";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "../pages/shop/products";

export const useGetProducts = () => {
  const { orderItems, setOrderItems } = useContext(ShopContext);
  const fetchOrders = async () => {
    try {
      const orders = (await getOrders()).data;
      let purchasedArray = {};
      for (let i = 0; i <= PRODUCTS.length; ++i) {
        purchasedArray[i] = 0;
      }
      for (const order of orders) {
        for (const id in order.products) {
          purchasedArray[id] += order.products[id];
        }
      }
      setOrderItems(purchasedArray);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { orderItems };
};
