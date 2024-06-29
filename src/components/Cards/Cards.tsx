import React, { useState, useEffect } from "react";
import Styles from "./Cards.module.css";
import { Ischool } from "../../types/types";
import { Link } from "react-router-dom";
import { getSchoolsByClass } from "../../api/api-utils";
import { Preloader } from "../Preloader/Preloader";

export const Cards = () => {
  const [colleges, setColleges] = useState<Ischool[]>([]);
  const [universities, setUniversities] = useState<Ischool[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const [collegesData, universitiesData] = await Promise.all([
          getSchoolsByClass("Колледж"),
          getSchoolsByClass("Университет"),
        ]);
        setColleges(collegesData);
        setUniversities(universitiesData);
        setLoading(false);
      } catch (error) {
        setError("Fetch error: " + `${error}`);
      }
    };
    fetchSchools();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className={Styles["container"]}>
      <h1 className={Styles["card-title"]}>Колледжи:</h1>
      <div className={Styles["cards_container"]}>
        <div className={Styles["CardsList"]} id="recommendations">
          {error && <p className={Styles["error"]}>{error}</p>}
          {colleges.map((school) => (
            <Link
              to={`/school/${school._id}`}
              key={school._id}
              className={Styles["card__link"]}
            >
              <div className={Styles["Cards"]}>
                <h1 className={Styles["Card-title__text"]}>{school.name}</h1>
                <p className={Styles["Card-description__text"]}>
                  Понравилось: {school.likes}
                </p>
              </div>
            </Link>
          ))}
          <div className={Styles["line"]}></div>
        </div>
      </div>

      <h1 className={Styles["card-title"]}>Университеты:</h1>
      <div className={Styles["cards_container"]}>
        <div className={Styles["CardsList"]} id="recommendations">
          {universities.map((school) => (
            <Link
              to={`/school/${school._id}`}
              key={school._id}
              className={Styles["card__link"]}
            >
              <div className={Styles["Cards"]}>
                <h1 className={Styles["Card-title__text"]}>{school.name}</h1>
                <p className={Styles["Card-description__text"]}>
                  Понравилось: {school.likes}
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
