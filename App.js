import React from "react";
import ReactDOM from "react-dom/client";
import { resData } from "./Constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/7528/screenshots/547232/pizzadribble.png?resize=400x0"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, sla } =
    props?.resData?.info;
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          className="res-logo"
          alt="food"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
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
const RestaurantContainer = () => {
  return (
    <div className="res-container">
      {resData.map((res) => (
        <RestaurantCard resData={res} />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h1>Search</h1>
      </div>
      <div className="res-container">
        <RestaurantContainer />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
