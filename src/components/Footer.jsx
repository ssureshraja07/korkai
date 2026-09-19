import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1: About Korkai */}
          <div className="footer-col">
            <h3>ABOUT KORKAI</h3>
            <p>
              Korkai is committed to connecting premium products from Tamil Nadu with customers across the globe.
            </p>
            <p>
              From eco-friendly coir substrates to authentic Indian spices and everyday essentials, we deliver trusted quality backed by professional export standards.
            </p>
            <div className="footer-social-row">
              <a href="#" className="footer-social-btn" aria-label="Facebook">Fb</a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">Ig</a>
              <a href="#" className="footer-social-btn" aria-label="Twitter">X</a>
              <a href="https://wa.me/918754076366" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="WhatsApp">Wa</a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h3>QUICK LINKS</h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/general-products">General Products</Link>
              </li>
              <li>
                <Link to="/coir-products">Coir Products</Link>
              </li>
              <li>
                <Link to="/spicy-products">Spicy Products</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div className="footer-col footer-col-contact">
            <h3>CONTACT US</h3>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <p>
                4/315, Upstairs, TNHB COLONY,<br />
                Ettayapuram Road,<br />
                Thoothukudi - 628002, Tamil Nadu, India
              </p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <p>
                <a href="tel:+918754076366">+91 87540 76366</a>
              </p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <p>
                <a href="mailto:nithishmuniasamy78@gmail.com">
                  nithishmuniasamy78@gmail.com
                </a>
                <br />
                <a href="mailto:trade@korkaiexportimport.com">
                  trade@korkaiexportimport.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p>© {currentYear} Korkai Export Import. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/about">Terms & Conditions</Link>
            <Link to="/about">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
