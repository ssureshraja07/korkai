import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import SpicyProducts from "../components/SpicyProducts";
import Footer from "../components/Footer";

export default function SpicyProductsPage() {
  return (
    <div className="category-page-wrapper">
      <Navbar />
      <CategoryNav currentTitle="Spicy Products" />
      <main>
        <SpicyProducts />
      </main>
      <Footer />
    </div>
  );
}
