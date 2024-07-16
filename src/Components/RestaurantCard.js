import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating , totalRatingsString
  } =
    resData?.info;
  return (
    <div className="w-72 p-3 m-4 shadow-lg bg-white h-80 hover:border-black text-left">
      <img
        className="h-48 w-full"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl line-clamp-1">{name}</h3>
      <p className="line-clamp-1">{cuisines.join(", ")}</p>
      {/* <h4 className="">{costForTwo}</h4> */}
      <div className="flex">
      <h4 className="flex text-xl">
        {avgRating}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      </h4>
      <h4 className="p-1 font-light">{totalRatingsString}</h4></div>
    </div>
  );
};

// high Order component
//  input - RestaurantCard => Restaurantopenabel

export const WithOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="z-[-1]">
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
