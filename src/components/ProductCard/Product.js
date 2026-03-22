import { useParams } from "react-router-dom"
import ProductShimmer from "./ProductShimmer"
import useFetchProduct from "../utils/useFetchProduct"

const Product = () => {
  const { id } = useParams()

  // Custom Hook to fetch Specific Product
  const product = useFetchProduct(id)

  if (!product) return <ProductShimmer />

  return (
    <div className="product-page">

      <div className="product-image-wrap">
        <img style={{width:"300px"}} src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <p className="product-category">{product.category[0].toUpperCase()+product.category.slice(1)}</p>
        <h2 className="product-title">{product.title}</h2>
        <p className="product-rating">⭐ {product.rating.rate}
          <span className="product-review-count">({product.rating.count} reviews)</span>
        </p>
        <p className="product-price">₹ {product.price}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-actions">
          <button className="add-cart">🛒 Add to Cart</button>
          <button className="buy-now">⚡ Buy Now</button>
        </div>
      </div>

    </div>
  )
}

export default Product