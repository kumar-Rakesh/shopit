import "./orders.css";

function OrderItem(props) {
  const { id, productName, price, productImage } = props.product;
  console.log(productName);
  const qty = props.qty;
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn">Purchased {qty} times</button>
    </div>
  );
}

export default OrderItem;
