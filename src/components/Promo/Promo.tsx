import { Link } from "react-router-dom";
import Styles from "./Promo.module.css";
export const Promo = () => {
  return (
    <>
      <div className={Styles["container"]}>
        <div className="column-information__block">
          <h1 className={Styles["main_title_promo"]}>Промокод</h1>
          <h2 className={Styles["main__title"]}>
            Хочешь получить промокод на vip подписку 😉 ?
          </h2>
          <h3 className={Styles["main__untitle"]}>
            Чтобы получить промокод для получения скидки на vip подписку тебе
            нужно:
            <ul>
              <li className={Styles["list__block"]}>
                Подписаться на наш{" "}
                <Link to="https://github.com/timnyphop">тик ток</Link> аккаунт{" "}
              </li>
              <li className={Styles["list__block"]}>Лайкнуть 5 любых клипов</li>
              <li className={Styles["list__block"]}>Написать комментарий</li>
            </ul>
          </h3>
          <Link to="/promo">
            <button>Ты все сделал?</button>
          </Link>
        </div>
      </div>
    </>
  );
};
