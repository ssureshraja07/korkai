import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import korkaiLogo from "../images/korkai-logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Products",
      href: "#general-products",
    },
    {
      label: "Logistics",
      href: "#logistics",
    },
    {
      label: "About Us",
      href: "#about",
    },
    {
      label: "Contact",
      href: "#about",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">

        <div className="navbar-container">

          {/* LOGO */}
          <div className="navbar-logo">
            <a href="#home" onClick={closeMenu}>
              <img
                src={korkaiLogo}
                alt="Korkai Export Import"
              />
            </a>
          </div>


          {/* MOBILE MENU BUTTON */}
          <button
            className="navbar-hamburger"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>


          {/* NAVIGATION LINKS */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

            {navLinks.map((link) => (
              <li
                key={link.label}
                className="nav-item"
              >
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}

          </ul>

        </div>


        {/* MOBILE OVERLAY */}
        {menuOpen && (
          <div
            className="navbar-overlay open"
            onClick={closeMenu}
          />
        )}

      </nav>
    </>
  );
}