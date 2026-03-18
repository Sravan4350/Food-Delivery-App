import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './Product.css'
import ProductShimmer from "./ProductShimmer"
import { PRODUCT_URL } from "../../utils/constants"

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const fetchProduct = async () => {
    try {
      console.log(PRODUCT_URL+id);
      
      const response = await axios.get(PRODUCT_URL+id)
      setProduct(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [id])

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