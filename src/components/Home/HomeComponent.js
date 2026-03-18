import { useEffect, useState } from "react"
import {ProductCards , Shimmer} from '../index'
import axios from "axios"
import { ALL_PRODUCTS_URL } from "../../utils/constants"
import './Home.css'
const BodyComponent = () => {

  const [loading, setLoading] = useState(true)
  const [allProduct, setAllProductData] = useState([])
  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState([]) // copy data for filtering...to avoid Data loss
  


  // Filtering Restaurants Based on Search
  const onSearchItems = (event) => {
    const value = event.target.value
    setSearch(value)
    const newFilteredData = allProduct?.filter(each => each.title.toLowerCase().includes(value.toLowerCase()))
    setFilteredData(newFilteredData)
  }

  // Top Rated Filter Restaurants
  const onClickFilter = () => {
    const topRated = allProduct?.filter(each => Number(each.rating.rate) > 4)
    console.log(topRated);
    
    setFilteredData(topRated)
  }

  const getProductData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(ALL_PRODUCTS_URL)
      const restaurantCard = response.data ?? [];      
      setFilteredData(restaurantCard)
      setAllProductData(restaurantCard)
      setLoading(false)
    }
    catch (error) {
      console.error("Error in API call", error);
      setLoading(false)
    }
  }


  // Fetch Call
  useEffect(() => {
    getProductData()
  }, [])

  return (
    <div className="search-wrapper">
      <div style={{display:"flex", gap:"20px"}}>
        <input placeholder="Search your Restaurant" className="search-input" value={search} type="text" onChange={onSearchItems} />
        <button onClick={onClickFilter}>Top Rated Restaurants</button>
      </div>
      <div>
        {loading ? <Shimmer /> : <ProductCards productData={filteredData} />}
      </div>
    </div>
  )
}
export default BodyComponent