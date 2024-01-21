import Product from "./product";
import { PRODUCTS } from "./products";
import "./shop.css";

function Shop() {
  return (
    <div className="shop">
      <h1 className="shopTitle">Shop It!</h1>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
