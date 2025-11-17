import { MinisRouter } from "@shopify/shop-minis-react";
import { Routes, Route } from "react-router";
import SizeGuidePage from "./pages/SizeGuidePage";
import { HomePage } from "./pages/HomePage";
import TestComponent from "./components/TestComponet";
import SearchProducts from "./components/SearchProducts";
import { ProductPage } from "./pages/ProductPage";

export default function App() {
  return (
    <MinisRouter viewTransitions>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/test" element={<TestComponent />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product-search" element={<SearchProducts />} />
      </Routes>
    </MinisRouter>
  );
}
