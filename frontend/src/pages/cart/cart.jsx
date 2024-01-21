import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../shop/products";
import CartItem from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getCartTotalAmount, checkout } = useContext(ShopContext);
  const cartTotalAmount = getCartTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} product={product} />;
          }
        })}
      </div>
      {cartTotalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${cartTotalAmount}</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Continue Shopping
          </button>
          <button
            onClick={() => {
              checkout();
              navigate("/orders");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your cart is empty!</h1>
      )}
    </div>
  );
}

export default Cart;
