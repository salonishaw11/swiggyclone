import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (resMenu.length == 0) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } = resMenu.cards[2].card.card.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {"Rs."}
        {costForTwoMessage} - {cuisines.join(",")}
      </p>
      {itemCards?.map((item) => (
        <h3 key={item?.card?.info?.id}>
          {item?.card?.info?.name}-{item?.card?.info?.price / 100}
        </h3>
      ))}
    </div>
  );
};

export default RestaurantMenu;
