import { useState } from "react"
import { GetAllRestro, Shimmer } from '../index'
import useFetchAllRestro from "../utils/useFetchAllRestro"
import useOnlineStatus from "../utils/useOnlineStatus"

const BodyComponent = () => {
  const [search, setSearch] = useState("")
  const userStatus = useOnlineStatus()
  const { allRestaurants, filteredData, setFilteredData, loading } = useFetchAllRestro()
  
  const onSearchItems = (event) => {
    const value = event.target.value
    setSearch(value)
    const newFilteredData = allRestaurants?.filter(each =>
      each.name.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredData(newFilteredData)
  }

  const onClickFilter = () => {
    const topRated = allRestaurants?.filter(each => Number(each.rating) > 4)
    setFilteredData(topRated)
  }

  if (!userStatus) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-xl font-bold font-sans text-red-500">
          No internet connection. Please check your network and try again.
        </h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* Search & Filter Bar */}
      <div className="flex justify-center items-center gap-4 px-5 py-8">

        {/* Search Input */}
        <input
          className="w-72 h-10 border border-gray-300 rounded-lg px-4 text-sm outline-none focus:ring-2 focus:ring-orange-400 transition duration-200 bg-white"
          placeholder="Search restaurants..."
          value={search}
          type="text"
          onChange={onSearchItems}
        />

        {/* Filter Button */}
        <button
          className="bg-orange-500 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-orange-600 hover:scale-105 transition duration-200 cursor-pointer shadow-sm"
          onClick={onClickFilter}
        >
          Top Rated Restaurants
        </button>

      </div>

      {/* Restaurant Cards / Shimmer */}
      <div className="flex flex-wrap justify-center gap-6 px-6 pb-10">
        {loading ? <Shimmer /> : <GetAllRestro restaurantData={filteredData} />}
      </div>

    </div>
  )
}

export default BodyComponent