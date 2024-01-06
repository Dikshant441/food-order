import RetaurantCard from "./Restaurant";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
const [ listofRestaurants , setListofRestaurants ] = useState(resObj);

  return (
    <div className="body">

      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listofRestaurants.filter(
            (res) => res?.info?.avgRating > 4.3
          );
          setListofRestaurants(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RetaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>


    </div>
  );
};

export default Body;
