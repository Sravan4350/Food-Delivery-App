import { useParams } from "react-router-dom"
import ProductShimmer from "./ProductShimmer"
import useFetchProduct from "../utils/useFetchProduct"

const Product = () => {
  const { id } = useParams()

  const product = useFetchProduct(id)

  if (!product) return <ProductShimmer />

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 p-10 min-h-screen bg-gray-100">

      {/* Left — Product Image */}
      <div className="flex justify-center items-center rounded-2xl shadow-md bg-white p-10 w-full md:w-[350px] h-[400px]">
        <img
          src={product.image}
          alt={product.title}
          className="w-80 h-80 object-contain"
        />
      </div>

      {/* Right — Product Info */}
      <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-md p-8 w-full md:max-w-lg">

        {/* Category */}
        <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest">
          {product.category[0].toUpperCase() + product.category.slice(1)}
        </p>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 leading-snug">
          {product.title}
        </h2>

        {/* Rating */}
        <p className="flex items-center gap-2 text-sm text-gray-600">
          ⭐ <span className="font-semibold text-yellow-500">{product.rating.rate}</span>
          <span className="text-gray-400">({product.rating.count} reviews)</span>
        </p>

        {/* Price */}
        <p className="text-2xl font-bold text-green-600">
          ₹ {product.price}
        </p>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {product.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-2">

          {/* Add to Cart */}
          <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm py-3 rounded-xl shadow-sm hover:scale-105 transition duration-200 cursor-pointer">
            🛒 Add to Cart
          </button>

          {/* Buy Now */}
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-3 rounded-xl shadow-sm hover:scale-105 transition duration-200 cursor-pointer">
            ⚡ Buy Now
          </button>

        </div>
      </div>

    </div>
  )
}

export default Product