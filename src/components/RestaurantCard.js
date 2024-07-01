import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, sla } =
    props?.resData?.info;
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          className="res-logo"
          alt="food"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div>
        <h1>{name}</h1>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
