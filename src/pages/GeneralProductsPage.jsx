import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import GeneralProducts from "../components/GeneralProducts";
import Footer from "../components/Footer";

export default function GeneralProductsPage() {
  return (
    <div className="category-page-wrapper">
      <Navbar />
      <CategoryNav currentTitle="General Products" />
      <main>
        <GeneralProducts />
      </main>
      <Footer />
    </div>
  );
}
