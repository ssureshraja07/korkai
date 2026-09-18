import { Link } from "react-router-dom";
import "./ProductCategories.css";

import pappadImg from "../images/general.jpeg";
import cocoPeatImg from "../images/coir-p.jpeg";
import redChilliImg from "../images/spices.jpeg";

const categories = [
  {
    id: "general-products",
    title: "General Products",
    route: "/general-products",
    image: pappadImg,
    badge: "4 Items",
    description:
      "Explore everyday authentic food essentials including traditional Indian pickles, crispy pappad, salt, and flavorful chutneys.",
  },
  {
    id: "coir-products",
    title: "Coir Products",
    route: "/coir-products",
    image: cocoPeatImg,
    badge: "5 Items",
    description:
      "Natural and durable eco-friendly coir solutions including Coco Peat, Coco Fibre, Husk Chips, Grow Bags, and Briquettes.",
  },
  {
    id: "spicy-products",
    title: "Spicy Products",
    route: "/spicy-products",
    image: redChilliImg,
    badge: "5 Items",
    description:
      "Aromatic, authentic Indian spices including Cumin, vibrant Red Chilli, bold Black Pepper, natural Turmeric, and sweet Cinnamon.",
  },
];

export default function ProductCategories() {
  return (
    <section className="categories-section reveal-section" id="categories">
      <div className="categories-container">
        {/* Header */}
        <div className="categories-heading">
          <span className="categories-tag">PRODUCT CATEGORIES</span>
          <h2>
            Browse Our <span>Export Categories</span>
          </h2>
          <p>
            Select a category below to explore our full product range, detailed specifications, and premium quality standards.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link to={cat.route} key={cat.id} className="category-card">
              <div className="category-image-wrap">
                <img src={cat.image} alt={cat.title} />
                <div className="category-image-overlay">
                  <span className="category-badge">{cat.badge}</span>
                </div>
              </div>

              <div className="category-content">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <div className="category-btn">
                  <span>View Products</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
