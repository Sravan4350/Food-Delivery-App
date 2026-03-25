import axios from "axios"
import { useEffect, useState } from "react"
import { ALL_RESTRO_URL } from "./constants"

const useFetchAllRestro = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredData, setFilteredData] = useState([]) // copy data for filtering...to avoid Data loss
  const [loading, setLoading] = useState(true)

  const fetchRestaurants = async () => {
    try {
      setLoading(true)
      const response = await axios.get(ALL_RESTRO_URL)
      const data = response.data;
      const restaurants = data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setAllRestaurants(restaurants)
      setFilteredData(restaurants)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  return { allRestaurants, filteredData, setFilteredData, loading }
}

export default useFetchAllRestro