import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleOnClick = () => {
    setShowIndex();
  };
  return (
    <div className=" w-6/12 mx-auto my-4 shadow-lg bg-gray-50 p-4">
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span onClick={handleOnClick}>🔽</span>
      </div>
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
