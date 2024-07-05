import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginInfo, setLoginInfo] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              loginInfo == "login"
                ? setLoginInfo("logout")
                : setLoginInfo("login")
            }
          >
            {loginInfo}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
