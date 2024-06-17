import { FC } from "react";
import Styles from "./Error.module.css";
import { Link } from "react-router-dom";
export const ErrorNotFound: FC = () => {
  return (
    <>
      <h1 className={Styles["error__title"]}>Error 404</h1>
      <h2 className={Styles["error__untitle"]}> Not found🫠</h2>
      <div className={Styles["error-button__block"]}>
        <Link to="/" className={Styles["error-button__link"]}>
          <button className={Styles["error__button"]}>
            <p className={Styles["error-button__text"]}>Вернуться обратно</p>
          </button>
        </Link>
      </div>
    </>
  );
};
