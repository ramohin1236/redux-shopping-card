import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Cart from "./components/Cart.jsx";
import Product from "./components/Product.jsx";
import Home from "./pages/Home/Home.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CartPage from "./pages/Card/CartPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="cart" element={<CartPage />} />
        </Route> 
      </Routes>
    </Provider>
  </BrowserRouter>
);
