import React from "react";
import Styles from "./Cards.module.css";

import { Link } from "react-router-dom";

export const Cards = () => {
  const bebra = [1, 2];
  return (
    <>
      <div className={Styles["container"]}>
        <h1 className={Styles["card-title"]}>Колледжи: </h1>
        <div className={Styles["cards_container"]}>
          <div className={Styles["CardsList"]} id="recommendations">
            {bebra.map((data, index) => (
              <Link to="$" className={Styles["card__link"]}>
                <div className={Styles["Cards"]}>
                  <h1 className={Styles["Card-title__text"]} key={index}></h1>
                  <p
                    className={Styles["Card-description__text"]}
                    key={index}
                  ></p>
                </div>
              </Link>
            ))}
            <div className={Styles["line"]}></div>
          </div>
        </div>
        <h1 className={Styles["card-title"]}>Университеты</h1>
        <div className={Styles["cards_container"]}>
          <div className={Styles["CardsList"]} id="recommendations">
            {bebra.map((data, index) => (
              <Link to={"#"} className={Styles["card__link"]}>
                <div className={Styles["Cards"]}>
                  <h1 className={Styles["Card-title__text"]} key={index}></h1>
                  <p
                    className={Styles["Card-description__text"]}
                    key={index}
                  ></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={Styles["line"]}></div>
      </div>
    </>
  );
};
