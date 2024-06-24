import React, { useState, useEffect, useMemo } from "react";
import Styles from "./Cards.module.css";
import { Ischool } from "../../types/types";
import { Link } from "react-router-dom";
import { getSchool } from "../../api/api-utils";
import { Preloader } from "../Preloader/Preloader";

export const Cards = () => {
  const [schools, setSchools] = useState<Ischool[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getSchool("http://localhost:3001/api/schools")
      .then((data) => {
        setSchools(data);
        setLoading(false);
      })
      .catch((error) => setError("Fetch error: " + error.message));
  }, []);
  const colloges = schools.filter((schools) => schools.classes === "Колледж");
  const university = schools.filter(
    (schools) => schools.classes === "Университет"
  );
  if (loading) {
    return <Preloader />;
  }
  return (
    <div className={Styles["container"]}>
      <h1 className={Styles["card-title"]}>Колледжи:</h1>
      <div className={Styles["cards_container"]}>
        <div className={Styles["CardsList"]} id="recommendations">
          {error && <p className={Styles["error"]}>{error}</p>}
          {colloges.map((school) => (
            <Link
              to={`/school/${school._id}`}
              key={school._id}
              className={Styles["card__link"]}
            >
              <div className={Styles["Cards"]}>
                <h1 className={Styles["Card-title__text"]}>{school.name}</h1>
                <p className={Styles["Card-description__text"]}>
                  Понравилось:
                  {school.likes}
                </p>
              </div>
            </Link>
          ))}
          <div className={Styles["line"]}></div>
        </div>
      </div>
      <h1 className={Styles["card-title"]}>Университеты</h1>
      <div className={Styles["cards_container"]}>
        <div className={Styles["CardsList"]} id="recommendations">
          {university.map((school, index) => (
            <Link
              to={`/school/${school._id}`}
              key={index}
              className={Styles["card__link"]}
            >
              <div className={Styles["Cards"]}>
                <h1 className={Styles["Card-title__text"]}>{school.name}</h1>
                <p className={Styles["Card-description__text"]}>
                  Понравилось:{school.likes}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={Styles["line"]}></div>
    </div>
  );
};
