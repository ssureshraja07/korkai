import { Link, useLocation } from "react-router-dom";
import "./CategoryNav.css";

export default function CategoryNav({ currentTitle }) {
  const location = useLocation();

  const categories = [
    { label: "General Products", path: "/general-products" },
    { label: "Coir Products", path: "/coir-products" },
    { label: "Spicy Products", path: "/spicy-products" },
  ];

  return (
    <div className="category-nav-bar">
      <div className="category-nav-container">
        {/* Breadcrumbs */}
        <div className="category-breadcrumbs">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/#categories">Product Categories</Link>
          <span className="separator">/</span>
          <span className="current">{currentTitle}</span>
        </div>

        {/* Category switcher pills */}
        <div className="category-pills">
          <Link to="/#categories" className="category-pill back-btn">
            ← All Categories
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className={`category-pill ${location.pathname === cat.path ? "active" : ""
                }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

