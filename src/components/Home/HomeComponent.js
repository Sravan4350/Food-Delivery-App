import { useState } from "react"
import { ProductCards, Shimmer } from '../index'
import useFetchAllProducts from "../utils/useFetchAllProducts"
import useOnlineStatus from "../utils/useOnlineStatus"

const BodyComponent = () => {
  const [search, setSearch] = useState("")
  const userStatus = useOnlineStatus()
  const { allProduct, filteredData, setFilteredData, loading } = useFetchAllProducts()

  const onSearchItems = (event) => {
    const value = event.target.value
    setSearch(value)
    const newFilteredData = allProduct?.filter(each =>
      each.title.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredData(newFilteredData)
  }

  const onClickFilter = () => {
    const topRated = allProduct?.filter(each => Number(each.rating.rate) > 4)
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
          className="w-72 h-10 border border-gray-300 rounded-lg px-4 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white"
          placeholder="Search products..."
          value={search}
          type="text"
          onChange={onSearchItems}
        />

        {/* Filter Button */}
        <button
          className="bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-200 cursor-pointer shadow-sm"
          onClick={onClickFilter}
        >
          Top Rated Products
        </button>

      </div>

      {/* Product Cards / Shimmer */}
      <div className="flex flex-wrap justify-center gap-6 px-6 pb-10">
        {loading ? <Shimmer /> : <ProductCards productData={filteredData} />}
      </div>

    </div>
  )
}

export default BodyComponent