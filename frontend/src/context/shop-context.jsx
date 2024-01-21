import { createContext, useState } from "react";
import { PRODUCTS } from "../pages/shop/products";
import { addOrder, getOrders } from "../api/api";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i <= PRODUCTS.length; ++i) {
      cart[i] = 0;
    }
    return cart;
  };

  const getDefaultOrderItems = () => {
    let orderItems = {};
    for (let i = 0; i <= PRODUCTS.length; ++i) {
      orderItems[i] = 0;
    }
    return orderItems;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [orderItems, setOrderItems] = useState(getDefaultOrderItems());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItems = (quantity, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: quantity }));
  };

  const getCartTotalAmount = () => {
    let totalAmount = 0;
    for (let product of PRODUCTS) {
      if (cartItems[product.id] > 0) {
        totalAmount += cartItems[product.id] * Number(product.price);
      }
    }
    return totalAmount;
  };

  const checkout = async () => {
    let productArray = {};
    for (let product of PRODUCTS) {
      if (cartItems[product.id] > 0) {
        productArray[product.id] = cartItems[product.id];
      }
    }
    try {
      await addOrder({
        products: productArray,
        subtotal: getCartTotalAmount(),
      });
      setCartItems(getDefaultCart());
    } catch (err) {
      console.log(err);
    }
  };

  const context = {
    cartItems,
    orderItems,
    checkout,
    setOrderItems,
    addToCart,
    removeFromCart,
    updateCartItems,
    getCartTotalAmount,
  };

  return (
    <ShopContext.Provider value={context}>
      {props.children}
    </ShopContext.Provider>
  );
};
