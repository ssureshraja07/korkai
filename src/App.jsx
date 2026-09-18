import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import CoirProductsPage from "./pages/CoirProductsPage";
import GeneralProductsPage from "./pages/GeneralProductsPage";
import SpicyProductsPage from "./pages/SpicyProductsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coir-products" element={<CoirProductsPage />} />
        <Route path="/products/coir" element={<CoirProductsPage />} />
        <Route path="/general-products" element={<GeneralProductsPage />} />
        <Route path="/products/general" element={<GeneralProductsPage />} />
        <Route path="/spicy-products" element={<SpicyProductsPage />} />
        <Route path="/products/spices" element={<SpicyProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;