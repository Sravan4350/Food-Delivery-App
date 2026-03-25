import { useParams } from "react-router-dom"
import RestroShimmer from "./RestroShimmer"
import useFetchRestro from "../utils/useFetchRestro"

const RestroCard = () => {
  // useParams is a hook that allows us to access the parameters of the current route.
  const {resId} = useParams()
  
  // Custom hook to fetch restaurant menu data based on the restaurant ID (resId).
  const resInfo = useFetchRestro(resId);

  if (!resInfo) {
    return <RestroShimmer />;
  }

  const {name = "", cuisines = [], costForTwoMessage = ""} = resInfo?.cards[2]?.card?.card?.info || {};
  const menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards || [];
  console.log(menuItems);
  

  return <h1>Hello</h1>
  // (<div className="restaurant-menu">
  //   <h1>{name}</h1>
  //   <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
  //   {menuItems.map((item) => (
  //     <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
  //   ))}
  // </div>)
}

export default RestroCard;