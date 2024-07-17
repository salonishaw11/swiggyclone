import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, sla } =
    props?.resData?.info;
  return (
    <div className="p-4 m-4 bg-slate-50 hover:bg-slate-100 rounded-lg w-[250]">
      <div className="rounded-lg">
        <img
          className="res-logo"
          alt="food"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div>
        <h1 className="font-bold py-4 text-lg">{name}</h1>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
