import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./App.css";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Navbar from "./components/Navbar";
import { ShopContextProvider } from "./context/shop-context";
import Orders from "./pages/orders/orders";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
