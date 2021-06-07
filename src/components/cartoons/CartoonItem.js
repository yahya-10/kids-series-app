import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Buttons from "./Buttons";
import "./CartoonItem.scss";

const CartoonItem = ({ title, backgroundImg, desc, first, trailerButton }) => {
  return (
    <>
      <div
        className="item"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className="item__container">
          <div className="item__text">
            <p>{title}</p>
            <div className="item__description">
              <p>{desc}</p>
            </div>
          </div>
          <div className="item__footer">
            {trailerButton && (
              <div className="item__button">
                <Buttons />
              </div>
            )}
            {first && (
              <div className="item__expandIcon">
                <ExpandMoreIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartoonItem;
