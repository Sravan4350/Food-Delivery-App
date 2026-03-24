import { Link } from "react-router-dom";

const ProductCards = ({ productData }) => {
  return (

    // Cards Grid Container
    <div className="flex flex-wrap justify-center gap-6 p-6">

      {productData.map((each) => (
        <Link
          key={each.id}
          to={`/product/${each.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {/* Single Card */}
          <div className="flex flex-col items-center bg-white w-56 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition duration-200 cursor-pointer gap-3">

            {/* Product Image */}
            <img
              src={each.image}
              alt={each.title}
              className="w-36 h-36 object-contain"
            />

            {/* Product Title */}
            <p className="text-sm font-semibold text-gray-800 text-center">
              {each.title.slice(0, 20)}...
            </p>

            {/* Product Price */}
            <p className="text-base font-bold text-green-600">
              ${each.price}
            </p>

            {/* Product Rating */}
            <p className="text-xs text-gray-500">
              ⭐ Rating:{" "}
              <span className="font-semibold text-yellow-500">
                {each.rating.rate}
              </span>
            </p>

          </div>
        </Link>
      ))}

    </div>
  );
};

export default ProductCards;