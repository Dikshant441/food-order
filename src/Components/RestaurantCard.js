import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.info;
  return (
    <div className="w-72 p-3 m-4 shadow-lg bg-rose-100 hover:bg-rose-200 h-80 hover:border-black text-left">
      <img
        className="h-48 w-full"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl line-clamp-1">{name}</h3>
      <p className="line-clamp-1">{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} star</h4>
    </div>
  );
};

// high Order component
//  input - RestaurantCard => Restaurantopenabel

export const WithOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="z-[-1]">
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
