import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (resMenu.length == 0) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } = resMenu.cards[2].card.card.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card.card?.["@type"] ===
        ("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    );
  console.log(categories);
  return (
    <div className=" text-center">
      <h1 className="font-bold text-2xl my-2">{name}</h1>
      <p className="font-bold text-lg">
        {"Rs."}
        {costForTwoMessage} - {cuisines.join(",")}
      </p>
      {categories.map((c, index) => {
        return (
          <RestaurantCategory
            key={c?.card?.card?.title}
            data={c.card.card}
            showItems={showIndex === index ? true : false}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
