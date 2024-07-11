import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";

const Body = () => {
  const [resList, setRestList] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const isOnline = useOnline();
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LIS"
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
    console.log(json?.data);
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

  if (!isOnline) {
    return <h1>You are not connected to the internet</h1>;
  }
  return filterRestaurants?.length === 0 ? (
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
          <Link key={res.info.id} to={"/restaurants/" + +res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
          //<RestaurantCard resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
