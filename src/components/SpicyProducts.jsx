import "./SpicyProducts.css";

import blackPepper from "../images/lack-pepper.jpeg";
import cinnamon from "../images/cinnamon.jpeg";
import cumin from "../images/CumminSeedsPowder.jpeg";
import redChilli from "../images/Red-Chilli-Powder.jpeg";
import turmeric from "../images/turmeric-powder.jpeg";

const spicyProducts = [
  {
    id: 1,
    name: "Cumin & Cumin Powder",
    image: cumin,
    description:
      "Premium quality cumin seeds and finely ground cumin powder with rich aroma and authentic flavor.",
  },
  {
    id: 2,
    name: "Red Chilli & Chilli Powder",
    image: redChilli,
    description:
      "Carefully selected red chillies offering vibrant colour, rich flavour, and the perfect level of heat.",
  },
  {
    id: 3,
    name: "Black Pepper & Powder",
    image: blackPepper,
    description:
      "High-quality black pepper with a bold aroma and distinctive taste, available as whole pepper and powder.",
  },
  {
    id: 4,
    name: "Turmeric Finger & Powder",
    image: turmeric,
    description:
      "Natural turmeric with rich colour and earthy flavour, carefully processed for quality and freshness.",
  },
  {
    id: 5,
    name: "Cinnamon",
    image: cinnamon,
    description:
      "Premium cinnamon with a naturally sweet aroma and warm flavour, ideal for culinary and food applications.",
  },
];

function SpicyProducts() {
  return (
    <section className="spicy-section reveal-section" id="spices">

      {/* Heading */}
      <div className="spicy-heading">
        <span>OUR SPICES</span>

        <h2>
          Authentic Flavours,
          <br />
          <strong>Global Quality</strong>
        </h2>

        <p>
          Discover our carefully selected range of premium Indian spices,
          sourced for authentic taste, aroma, and quality.
        </p>
      </div>

      {/* Cards */}
      <div className="spicy-grid">

        {spicyProducts.map((product) => (
          <div className="spicy-card" key={product.id}>

            {/* Image */}
            <div className="spicy-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            {/* Content */}
            <div className="spicy-content">

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <button className="spicy-button">
                View Details
                <span>→</span>
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SpicyProducts;