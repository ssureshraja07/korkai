import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
      <Navbar />

      {/* Hero Banner */}
      <section className="about-hero-banner">
        <div className="about-hero-content">
          <span className="about-hero-tag">ABOUT KORKAI</span>
          <h1>
            Connecting <span>Tamil Nadu</span> to the World
          </h1>
          <p>
            Rooted in the historic maritime trade legacy of Thoothukudi, Korkai specializes in exporting premium agricultural, coir, and authentic spice products globally.
          </p>
        </div>
      </section>

      {/* Main Story & Highlights */}
      <section className="about-main-section">
        <div className="about-story-grid">
          <div className="about-story-text">
            <h2>
              Heritage of Quality, <br />
              <span>Commitment to Trust</span>
            </h2>
            <p>
              Named after the ancient Tamil port city famous for maritime trade and pearl fisheries, <strong>Korkai Export Import</strong> carries forward that proud heritage of international commerce.
            </p>
            <p>
              Operating from Thoothukudi, Tamil Nadu, we partner directly with local farmers, producers, and processing centers to deliver the highest quality coir solutions, aromatic Indian spices, and traditional food products to international buyers with complete transparency.
            </p>
            <p>
              Every shipment is verified for strict global trade parameters, moisture control, hygienic packaging, and timely logistics support.
            </p>
          </div>

          <div className="about-story-card">
            <h3>Why Partner With Korkai?</h3>
            <div className="about-story-feature-list">
              <div className="about-feature-item">
                <div className="feature-icon-bubble">✓</div>
                <div>
                  <strong>Port Proximity Advantage</strong>
                  <span>Located near VO Chidambaranar Port, Thoothukudi for rapid global shipping.</span>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-bubble">✓</div>
                <div>
                  <strong>Strict Quality Control</strong>
                  <span>100% natural, unadulterated products inspected at every stage.</span>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-bubble">✓</div>
                <div>
                  <strong>Customized Packaging</strong>
                  <span>Bulk, retail, and private labeling options tailored to international buyer specs.</span>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-bubble">✓</div>
                <div>
                  <strong>Ethical Sourcing</strong>
                  <span>Direct farmer collaboration ensuring fair value and sustainable practices.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="about-values-section">
          <div className="about-section-title">
            <h2>Our Core Product Lines</h2>
            <p>Carefully managed supply chains across three specialized divisions</p>
          </div>

          <div className="about-values-grid">
            <div className="value-card">
              <div className="value-icon">🥥</div>
              <h3>Coir Substrates</h3>
              <p>
                Eco-friendly coco peat blocks, fibre, husk chips, and grow bags for modern hydroponics, horticulture, and soil conditioning.
              </p>
              <div style={{ marginTop: "16px" }}>
                <Link to="/coir-products" style={{ color: "#c49a3d", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>
                  View Coir Products →
                </Link>
              </div>
            </div>

            <div className="value-card">
              <div className="value-icon">🌶️</div>
              <h3>Authentic Spices</h3>
              <p>
                Aromatic cumin, vivid red chillies, black pepper, high-curcumin turmeric, and cinnamon sourced for rich flavor and aroma.
              </p>
              <div style={{ marginTop: "16px" }}>
                <Link to="/spicy-products" style={{ color: "#c49a3d", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>
                  View Spicy Products →
                </Link>
              </div>
            </div>

            <div className="value-card">
              <div className="value-icon">🌾</div>
              <h3>General Essentials</h3>
              <p>
                Authentic Indian food items including traditional pickles, crispy pappad, mineral-rich salt, and flavorful chutneys.
              </p>
              <div style={{ marginTop: "16px" }}>
                <Link to="/general-products" style={{ color: "#c49a3d", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>
                  View General Products →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info box */}
        <div className="about-contact-box" id="contact">
          <h2>Get In Touch With Our Trade Desk</h2>
          <p className="subtitle">
            Have an inquiry or requirement for export orders? Contact us directly:
          </p>

          <div className="about-contact-grid">
            <div className="contact-card-item">
              <div className="icon">📍</div>
              <h3>Corporate Office</h3>
              <p>
                4/315, Upstairs, TNHB COLONY,<br />
                Ettayapuram Road,<br />
                Thoothukudi - 628002,<br />
                Tamil Nadu, India
              </p>
            </div>

            <div className="contact-card-item">
              <div className="icon">📞</div>
              <h3>Phone & WhatsApp</h3>
              <p>
                <a href="tel:+918754076366">+91 87540 76366</a>
              </p>
              <p style={{ marginTop: "8px" }}>
                <a
                  href="https://wa.me/918754076366"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#25D366", fontWeight: 600 }}
                >
                  Chat on WhatsApp ↗
                </a>
              </p>
            </div>

            <div className="contact-card-item">
              <div className="icon">✉️</div>
              <h3>Email Inquiries</h3>
              <p>
                <a href="mailto:nithishmuniasamy78@gmail.com">
                  nithishmuniasamy78@gmail.com
                </a>
                <br />
                <a href="mailto:trade@korkaiexportimport.com">
                  trade@korkaiexportimport.com
                </a>
              </p>
              <p style={{ marginTop: "6px", fontSize: "13px", color: "#94a3b8" }}>
                Responses typically within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
