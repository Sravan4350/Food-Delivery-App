import axios from "axios"
import { useEffect, useState } from "react"
import { PRODUCT_URL } from "./constants"

const useFetchProduct = (id) => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    try {
      async function getData() {
        const result = await axios.get(PRODUCT_URL+id)
        const response = result.data
        setProduct(response)
      }
      getData()
    } catch (error) {
      console.error(error);
    }
  }, [id])

  return product
}
export default useFetchProduct