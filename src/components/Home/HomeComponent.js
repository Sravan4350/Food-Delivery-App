import { useState } from "react"
import {ProductCards , Shimmer} from '../index'
import useFetchAllProducts from "../utils/useFetchAllProducts"
import useOnlineStatus from "../utils/useOnlineStatus"
 
const BodyComponent = () => {

  const [search, setSearch] = useState("")

  const userStatus = useOnlineStatus()

  // Custom Hook to fetch Products Data
  const {allProduct, filteredData, setFilteredData, loading} = useFetchAllProducts()

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
    setFilteredData(topRated)
  }

  if (!userStatus) {
    return <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"80vh", fontFamily:"sans-serif", fontWeight:"bold"}}>
      <h1>No internet connection. Please check your network and try again</h1>
    </div>
  }
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