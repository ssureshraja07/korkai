import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import korkaiLogo from "../images/korkai-logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (type, target) => {
    closeMenu();

    if (type === "home") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else if (type === "products") {
      if (location.pathname === "/") {
        const catElem = document.getElementById("categories");
        if (catElem) {
          catElem.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/categories");
      }
    } else if (type === "about") {
      navigate("/about");
    } else if (type === "contact") {
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/contact");
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="navbar-logo">
          <Link to="/" onClick={() => handleNavClick("home")}>
            <img src={korkaiLogo} alt="Korkai Export Import" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* NAVIGATION LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <button
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              onClick={() => handleNavClick("home")}
            >
              Home
            </button>
          </li>

          <li className="nav-item">
            <button
              className={`nav-link ${location.pathname.includes("products") ? "active" : ""
                }`}
              onClick={() => handleNavClick("products")}
            >
              Products
            </button>
          </li>

          <li className="nav-item">
            <button
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              onClick={() => handleNavClick("about")}
            >
              About Us
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* MOBILE OVERLAY */}
      {menuOpen && <div className="navbar-overlay open" onClick={closeMenu} />}
    </nav>
  );
}