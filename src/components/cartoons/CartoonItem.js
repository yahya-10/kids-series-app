import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Slide from "react-reveal/Slide";

import Buttons from "./Buttons";
import "./CartoonItem.scss";

/**
 *
 * A cartoon data
 * @param {object} props - Cartoon's object of properties.
 * @param {string} props.title - A cartoon's title.
 * @param {string} props.backgroundImg - A cartoon's background image.
 * @param {boolean} props.first - just to identify the first image to display.
 * @param {boolean} props.trailerButton - A button to redirect to a specific cartoon's trailer.
 */

const CartoonItem = ({ title, backgroundImg, first, trailerButton }) => {
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
            <Slide right>
              <p>{title}</p>
            </Slide>
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
