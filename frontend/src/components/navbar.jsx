import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/orders">Orders</Link>
      </div>
    </div>
  );
}

export default Navbar;
