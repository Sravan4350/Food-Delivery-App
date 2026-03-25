import axios from "axios"
import { useEffect, useState } from "react"
import { RESTRO_MENU_URL } from "./constants"

const useFetchRestro = (id) => {
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(RESTRO_MENU_URL + id)
        const response = result.data
        setRestaurant(response)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [id])

  return restaurant
}

export default useFetchRestro