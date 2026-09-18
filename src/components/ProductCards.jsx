import "./ProductCards.css";

import cocoFibre from "../images/coco-fibre.jpeg";
import cocoHuskChips from "../images/coco-husk-chips.jpeg";
import cocoPeat from "../images/coco-peat.jpeg";
import growBags from "../images/grow-bags.jpeg";
import cocoBriquttes from "../images/coco-briquttes.jpeg"


const products = [
  {
    id: 1,
    name: "Coco Peat",
    image: cocoPeat,
    description:
      "High-quality coco peat suitable for gardening, nurseries, and modern agricultural applications.",
  },
  {
    id: 2,
    name: "Coco Fibre",
    image: cocoFibre,
    description:
      "Natural and durable coco fibre widely used for ropes, mats, brushes, and eco-friendly products.",
  },
  {
    id: 3,
    name: "Coco Husk Chips",
    image: cocoHuskChips,
    description:
      "Premium coco husk chips providing excellent moisture retention for plants and growing applications.",
  },
  {
    id: 4,
    name: "Grow Bags",
    image: growBags,
    description:
      "Quality coco-based grow bags designed for efficient plant growth and professional cultivation.",
  },
   {
    id: 5,
    name: "Coco Briquettes",
    image: cocoBriquttes,
    description:
      "Compact, compressed coco peat briquettes ideal for home gardening, seed germination, and potting mixes.",
  },
];

function ProductCards() {
  return (
    <section className="products-section" id="categories">

      {/* Heading */}
      <div className="products-heading">
        <span>OUR PRODUCTS</span>

        <h2>
          Natural Products,
          <br />
          <strong>Global Standards</strong>
        </h2>

        <p>
          Discover our range of premium coir products,
          carefully sourced and prepared for customers worldwide.
        </p>
      </div>


      {/* Product Cards */}
      <div className="products-grid">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            {/* Image */}
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>


            {/* Content */}
            <div className="product-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <button className="product-button">
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

export default ProductCards;