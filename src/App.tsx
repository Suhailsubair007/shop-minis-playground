import { MinisRouter } from "@shopify/shop-minis-react";
import { Routes, Route } from "react-router";
import Navigation from "./Navigation";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import  HomePage  from "./pages/HomePage";

export default function App() {
  return (
    <MinisRouter viewTransitions>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </MinisRouter>
  );
}
