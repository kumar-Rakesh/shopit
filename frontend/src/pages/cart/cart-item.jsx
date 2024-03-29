import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function CartItem({ product }) {
  const { id, productName, productImage, description, price } = product;
  const { cartItems, addToCart, removeFromCart, updateCartItems } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => (updateCartItems(Number(e.target.value)), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
