import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h3>KidsHub</h3>
      </div>
      <div className="header__center">
        <a>Home</a>
        <a>Series</a>
        <a>Support</a>
      </div>
    </div>
  );
};

export default Header;
