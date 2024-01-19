import RestaurantCard, { WithOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("bodyrender", listofRestaurants);

  const RestaurantCardOpen = WithOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json); to see api data in console
    setListofRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  return listofRestaurants.length === undefined ? (
    <ShimmerUI />
  ) : (
    <div className="p-5 bg-pink-50 text-center">
      <div className="flex">
        <div className="search">
          <input
            type="text"
            className="focus:bg-rose-200 p-2 m-2 w-96"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 m-2 bg-red-500 hover:bg-red-800 text-white rounded-md "
            onClick={() => {
              //  filter the restaurants and update the ui
              // searchTYext
              // console.log(searchText);
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  ?.includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="p-2 m-2 bg-red-500 hover:bg-red-800 text-white rounded-md "
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-center bg-pink-50">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.isOpen ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
