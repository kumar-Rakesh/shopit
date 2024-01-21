import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../shop/products";
import OrderItem from "./order-item";
import "./orders.css";
import { useGetProducts } from "../../hooks/useGetOrders";

function Orders() {
  const { orderItems } = useGetProducts();
  console.log(orderItems);
  return (
    <div className="shop">
      <h4 className="shopTitle">Your Purchased Items!</h4>
      <div className="products">
        {Object.keys(orderItems).map((id, qty) => {
          return (
            orderItems[id] > 0 && (
              <OrderItem key={id} product={PRODUCTS[id]} qty={orderItems[id]} />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
