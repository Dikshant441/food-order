import RetaurantCard from "./Restaurant";
import resObj from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="res-container">
          {resObj.map((restaurant) => (
            <RetaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;