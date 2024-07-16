import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [ showIndex , setShowIndex ] = useState(null);

  const setShowIndexProps = (index) => {
    if(index === showIndex)
    {
      setShowIndex(null);
    }
    else{
      setShowIndex(index);
    }
  }

  if (resInfo === null) return <ShimmerUI />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center py-36 px-48">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategories
          key={category?.card?.card?.item}
          data={category?.card?.card}
          showItems = {index === showIndex ? true : false}
          setShowIndex={()=>  setShowIndexProps(index)} 
        />
      ))}
      {/* <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
