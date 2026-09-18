import Navbar from "../components/Navbar";
import Home from "../components/Home";
import ProductCategories from "../components/ProductCategories";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="home-page-wrapper">
      <Navbar />
      <Home />
      <ProductCategories />
      <Footer />
    </div>
  );
}
