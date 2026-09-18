import "./GeneralProducts.css";

import Pappad from "../images/pappad.jpeg";
import Pickles from "../images/pickles.jpeg";
import Salt from "../images/salt.jpeg";
import Chutneys from "../images/chutneys.jpeg";

const generalProducts = [
  {
    id: 1,
    name: "Pappad",
    image: Pappad,
    description:
      "Crispy and delicious Indian pappad made with carefully selected ingredients and traditional methods.",
  },
  {
    id: 2,
    name: "Indian Pickles",
    image: Pickles,
    description:
      "Authentic Indian pickles prepared with traditional spices and carefully selected ingredients.",
  },
  {
    id: 3,
    name: "Salt",
    image: Salt,
    description:
      "Quality salt carefully sourced and suitable for everyday cooking and food preparation.",
  },
  {
    id: 4,
    name: "Indian Chutneys",
    image: Chutneys,
    description:
      "Traditional Indian chutneys prepared with authentic flavours and quality ingredients.",
  },
];

function GeneralProducts() {
  return (
    <section className="general-section" id="general-products">

      {/* Heading */}
      <div className="general-heading">

        <span>OUR PRODUCTS</span>

        <h2>
          Everyday Essentials,
          <br />
          <strong>Authentic Quality</strong>
        </h2>

        <p>
          Explore our carefully selected range of traditional Indian
          food products, bringing authentic taste and quality to every home.
        </p>

      </div>


      {/* Cards */}
      <div className="general-grid">

        {generalProducts.map((product) => (
          <div className="general-card" key={product.id}>

            {/* Image */}
            <div className="general-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>


            {/* Content */}
            <div className="general-content">

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <button className="general-button">
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

export default GeneralProducts;