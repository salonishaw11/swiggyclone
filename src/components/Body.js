import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [resList, setRestList] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_"
    );
    const json = await data.json();
    setRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleOnClick = () => {
    const topRes = resList.filter((res) => res.info.avgRating > 4);
    setRestList(topRes);
  };

  const handleSearch = () => {
    const filterRes = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilterRestaurants(filterRes);
  };
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>search</button>
        </div>
        <div className="search">
          <button onClick={handleOnClick}>Top Restaurants</button>
        </div>
      </div>

      <div className="res-container">
        {filterRestaurants?.map((res) => (
          <RestaurantCard resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
