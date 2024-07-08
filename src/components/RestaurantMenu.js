import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResMenu(json.data);
    console.log(json.data);
  };

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
