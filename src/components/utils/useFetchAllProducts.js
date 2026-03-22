import axios from "axios"
import { useEffect, useState } from "react"
import { ALL_PRODUCTS_URL } from "./constants"

const useFetchAllProducts = () => {
  const [allProduct, setAllProductData] = useState([])
  const [filteredData, setFilteredData] = useState([]) // copy data for filtering...to avoid Data loss
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const getData = await axios.get(ALL_PRODUCTS_URL)
      const response = getData.data
      setAllProductData(response)
      setFilteredData(response)
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  },[])

  return {allProduct, filteredData, setFilteredData, loading}
}
export default useFetchAllProducts