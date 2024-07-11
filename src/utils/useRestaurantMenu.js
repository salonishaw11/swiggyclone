import React, { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResMenu(json.data);
    console.log(json.data);
  };
  return resMenu;
};

export default useRestaurantMenu;
