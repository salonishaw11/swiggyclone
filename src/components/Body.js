import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";
import UserContext from "../utils/userContext.js";

const Body = () => {
  const [resList, setRestList] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const RestaurantCardWithLabel = withVegLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
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
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="search"
            className="border border-solid border-black"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-slate-300 m-4 rounded-lg"
            onClick={handleSearch}
          >
            search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-slate-300 rounded-lg"
            onClick={handleOnClick}
          >
            Top Restaurants
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
          <label>User Name:</label>
          <input
            className="p-2 border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterRestaurants?.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + +res.info.id}>
            {res.info.veg ? (
              <RestaurantCardWithLabel resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
