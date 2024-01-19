import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategories = ({ data, showItems , setShowIndex}) => {
  // console.log(data);


  const handleclick = () => {
    // showItems ? setShowIndex(-1) : setShowIndex(index) ;
    setShowIndex();
  };
  

  return (
    <div>
      {/* header accordian */}
      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-bold text-lg">
            {data.title} - ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordian Body  */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
