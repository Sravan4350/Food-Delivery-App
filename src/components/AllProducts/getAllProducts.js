import { Link } from "react-router-dom";
import "./getAllProducts.css"

const ProductCards = ({ productData }) => {  
  console.log(productData);
  
  return (
    <div className="product-container">
      {productData.map((each) => (
        <Link
          key={each.id}
          to={`/product/${each.id}`}
          className="prodcuct-item-link"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="prodcuct-item">
            <img
              src={each.image}
              alt={each.title}
            />
            <p>{each.title.slice(0, 20)}</p>
            <p>{each.price} $</p>
            <p>
              Rating <span>{each.rating.rate}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCards;