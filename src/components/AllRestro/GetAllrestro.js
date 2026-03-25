import { Link } from "react-router-dom";

const GetAllRestro = ({ restaurantData }) => {
  console.log(restaurantData, "restaurantData");
  
  return (

    // Cards Grid Container
    // <div className="flex flex-wrap justify-center gap-6 p-6">

    //   {restaurantData.map((each) => (
    //     <Link
    //       key={each.id}
    //       to={`/restaurant/${each.id}`}
    //       style={{ textDecoration: "none", color: "inherit" }}
    //     >
    //       {/* Single Card */}
    //       <div className="flex flex-col items-center bg-white w-56 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition duration-200 cursor-pointer gap-3">

    //         {/* Restaurant Image */}
    //         <img
    //           src={each.image}
    //           alt={each.name}
    //           className="w-36 h-36 object-cover rounded-lg"
    //         />

    //         {/* Restaurant Name */}
    //         <p className="text-sm font-semibold text-gray-800 text-center">
    //           {each.name?.slice(0, 20)}...
    //         </p>

    //         {/* Cuisine Type */}
    //         <p className="text-xs text-gray-500 text-center">
    //           🍽️ {each.cuisine}
    //         </p>

    //         {/* Delivery Time */}
    //         <p className="text-sm font-bold text-orange-500">
    //           🕒 {each.deliveryTime} mins
    //         </p>

    //         {/* Restaurant Rating */}
    //         <p className="text-xs text-gray-500">
    //           ⭐ Rating:{" "}
    //           <span className="font-semibold text-yellow-500">
    //             {each.rating}
    //           </span>
    //         </p>

    //       </div>
    //     </Link>
    //   ))}

    // </div>
    <h1>Hello</h1>
  );
};

export default GetAllRestro;