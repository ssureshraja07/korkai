import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";

export default function CoirProductsPage() {
  return (
    <div className="category-page-wrapper">
      <Navbar />
      <CategoryNav currentTitle="Coir Products" />
      <main>
        <ProductCards />
      </main>
      <Footer />
    </div>
  );
}
