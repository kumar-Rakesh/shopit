import "./shop.css";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

function Product({ data }) {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to Cart
        {cartItems[id] > 0 && <>({cartItems[id]})</>}
      </button>
    </div>
  );
}

export default Product;
