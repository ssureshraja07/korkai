 import "./Home.css";
import korkaiLogo from "../images/korkai-logo.jpeg";

function Home() {
  return (
    <main className="home-section reveal-section" id="home">

      <div className="home-container">

        {/* LEFT CONTENT */}
        <div className="home-content">

          <div className="home-tag">
            EXPORT • IMPORT
          </div>

          <h1>
            Connecting
            <br />
            <span>Tamil Nadu</span>
            <br />
            to the World
          </h1>

          <p className="home-description">
            Your trusted source for premium coir products,
            authentic Indian spices, and carefully selected
            food products from Thoothukudi.
          </p>


          {/* Buttons */}
          <div className="home-buttons">

            <a
              href="#general-products"
              className="home-primary-button"
            >
              Explore Products
              <span>→</span>
            </a>

            <a
              href="#about"
              className="home-secondary-button"
            >
              Contact Us
            </a>

          </div>


          {/* Highlights */}
          <div className="home-highlights">

            <div className="highlight-item">
              <strong>Premium</strong>
              <span>Quality Products</span>
            </div>

            <div className="highlight-divider"></div>

            <div className="highlight-item">
              <strong>Global</strong>
              <span>Reach</span>
            </div>

            <div className="highlight-divider"></div>

            <div className="highlight-item">
              <strong>Trusted</strong>
              <span>Partnership</span>
            </div>

          </div>

        </div>


        {/* RIGHT LOGO SHOWCASE */}
        <div className="home-visual">

          <div className="logo-glow"></div>

          <div className="logo-card">

            <div className="logo-card-top">
              <span>ESTABLISHED FOR GLOBAL TRADE</span>
            </div>

            <img
              src={korkaiLogo}
              alt="Korkai Export Import"
              className="korkai-logo"
            />

            <div className="logo-card-bottom">
              <span>THOOTHUKUDI • TAMIL NADU</span>
            </div>

          </div>


          {/* Floating Highlights */}

          <div className="floating-card floating-card-one">
            <span className="floating-icon">🌿</span>

            <div>
              <strong>Natural Products</strong>
              <small>Premium Coir</small>
            </div>
          </div>


          <div className="floating-card floating-card-two">
            <span className="floating-icon">🌍</span>

            <div>
              <strong>Global Reach</strong>
              <small>Export • Import</small>
            </div>
          </div>

        </div>

      </div>


      {/* Bottom Scroll Indicator */}
      <div className="home-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

    </main>
  );
}

export default Home;