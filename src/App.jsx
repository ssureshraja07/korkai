import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductCards from "./components/ProductCards";
import SpicyProducts from "./components/SpicyProducts";
import GeneralProducts from "./components/GeneralProducts";
import AboutUs from "./components/AboutUs";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <GeneralProducts />
      <ProductCards />
      <SpicyProducts />
      <AboutUs />
    </>
  );
}

export default App;