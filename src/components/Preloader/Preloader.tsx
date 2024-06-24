import Styles from "./Preloader.module.css";
export const Preloader = () => {
  return (
    <div className={Styles["preloader"]}>
      <div className={Styles["spinner"]}></div>
    </div>
  );
};
