import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h3>logo</h3>
      </div>
      <div className="header__center">
        <p>Home</p>
        <p>Series</p>
        <p>Support</p>
      </div>
      <div className="header__right">
        <p>Premium</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Header;
