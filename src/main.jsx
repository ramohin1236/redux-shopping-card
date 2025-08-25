import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Cart from "./components/Cart.jsx";
import Product from "./components/Product.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
