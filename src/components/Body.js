import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockdata.js";

const Body = () => {
  const [resList, setRestList] = useState(resData);
  const handleOnClick = () => {
    const topRes = resList.filter((res) => res.info.avgRating > 4);
    setRestList(topRes);
  };
  return (
    <div className="body">
      <div className="search">
        <button onClick={handleOnClick}>Top Restaurants</button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
