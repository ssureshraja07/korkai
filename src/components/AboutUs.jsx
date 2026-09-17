import "./AboutUs.css";

function AboutUs() {
  return (
  <section
  className="about-section reveal-section"
  id="about"
>

      <div className="about-container">

        {/* Heading */}
        <div className="about-header">
          <h2>ABOUT KORKAI</h2>
          <div className="about-line"></div>

          <p>
            Korkai is committed to connecting premium products from
            Tamil Nadu with customers across the world.
          </p>
        </div>


        {/* About + Contact */}
        <div className="about-content">

          {/* Our Company */}
          <div className="about-column">
            <h3>Our Company</h3>

            <p>
              We focus on quality, reliability, and building long-term
              relationships with our customers and business partners.
            </p>

            <p>
              From natural coir products to authentic Indian spices
              and other carefully selected products, we aim to deliver
              dependable quality with professional service.
            </p>
          </div>


          {/* Contact */}
          <div className="about-column contact-column">

            <h3>Contact Us</h3>

            <div className="contact-item">
              <span>📍</span>
              <p>
                4/315, Upstairs, TNHB COLONY,<br />
                Ettayapuram Road,<br />
                Thoothukudi - 628002
              </p>
            </div>

            <div className="contact-item">
              <span>📞</span>
              <p>+91 87540 76366</p>
            </div>

            <div className="contact-item">
              <span>✉️</span>
              <p>nithishmuniasamy78@gmail.com</p>
            </div>

          </div>

        </div>


        {/* Social Media */}
        <div className="social-section">

          <h3>Follow Us</h3>

          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>

        </div>


        {/* Footer */}
        <div className="about-footer">

          <p>
            © {new Date().getFullYear()} Korkai. All rights reserved.
          </p>

          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutUs;