import Styles from "./School2.module.css";
import { useParams } from "react-router-dom";
import { Ischool } from "../../types/types";
import { ErrorNotFound } from "../../pages/Error/Error";
import { raitingSchool } from "../../data/data-utils";
import { useState, useEffect } from "react";
import { getSchool } from "../../api/api-utils";
export const School = () => {
  const [schools, setSchools] = useState<Ischool[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();
  const schoolId = id;

  useEffect(() => {
    if (schools.length === 0) {
      getSchool("http://localhost:3001/api/schools")
        .then((data) => {
          setSchools(data);
          setLoading(false);
        })
        .catch((error) => setError("Fetch error: " + error.message));
    }
  }, [schools]);

  const school = schools.find((school) => school._id === schoolId);
  if (loading) {
    console.log("идет загрузочка");
    return <div className={Styles["preloader"]}>Загрузка...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  if (!school) {
    return <ErrorNotFound />;
  }
  const averageRaiting = raitingSchool(school);
  return (
    <>
      {school ? (
        <div className={Styles["container"]}>
          <div className={Styles["information__block"]}>
            <div className={Styles["column_information"]}>
              <h1 className={Styles["school-title__name"]}>{school.name}</h1>
              <p className={Styles["school-text__description"]}>
                {school.description}
              </p>

              <h3 className={Styles["school-title__raiting"]}>
                {averageRaiting}
              </h3>
              <h4>Учился здесь? Оцени по 5 бальной шкале: </h4>
              <div className={Styles["school-star__raiting"]}></div>
              <div className={Styles["school-likes__column"]}>
                <button className={Styles["school-likes__button"]}>
                  Like {school.likes}
                </button>
              </div>
            </div>
            <div className={Styles["school-image__block"]}>
              <img
                src={school.imageUrl}
                className={Styles["school-image__img"]}
                alt="картинка колледжа"
              ></img>
            </div>
          </div>
        </div>
      ) : (
        <ErrorNotFound />
      )}
    </>
  );
};
