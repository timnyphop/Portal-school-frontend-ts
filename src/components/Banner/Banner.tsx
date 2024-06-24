import Styles from "./Banner.module.css";
import React, { memo } from "react";

export const Banner = () => {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={Styles["banner"]}>
      <div className={Styles["banner__description"]}>
        <h1 className={Styles["banner__title"]}>
          Портал для подбора учебных заведений&nbsp;будущим it-специалистам
        </h1>
        <div className={Styles["banner__text-block"]}>
          <p className={Styles["banner__text"]}>
            Подбери для себя учебное заведение специалирующееся на обучении
            актуальных направлений it, а также читай реальные отзывы на вузы,
            колледжи, техникумы и т.д.
          </p>
        </div>
        <a
          href="#recommendations"
          className={Styles["button"]}
          onClick={handleScroll}
        >
          Я хочу учиться👨🏼‍💻
        </a>
      </div>
      <img
        src="https://optim.tildacdn.com/tild6437-3164-4665-b464-383630356462/-/format/webp/max-nelson-KXkgOigCq.jpg"
        alt="Ноутбук"
        className={Styles["banner__image"]}
        loading="lazy"
      />
    </section>
  );
};

memo(Banner);
