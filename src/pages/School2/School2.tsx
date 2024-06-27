import Styles from "./School2.module.css";
import { useParams } from "react-router-dom";
import { Ischool } from "../../types/types";
import { ErrorNotFound } from "../../pages/Error/Error";
import { raitingSchool } from "../../data/data-utils";
import { useState, useEffect, useMemo } from "react";
import { getSchool } from "../../api/api-utils";
import { Preloader } from "../../components/Preloader/Preloader";
import { useLikes } from "../../contexts/LikeContext";
export const SchoolPage = () => {
  const [schools, setSchools] = useState<Ischool[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { likeSchool, likes } = useLikes();
  const { id } = useParams<{ id: string }>();
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
  const memoizedSchools = useMemo(() => schools, [schools]);
  const school = useMemo(
    () => schools.find((school) => school._id === id),
    [schools, id]
  );
  if (loading) {
    return <Preloader />;
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
                Рейтинг: {averageRaiting}
              </h3>
              <h4>Учился здесь? Оцени по 5 бальной шкале: </h4>
              <div className={Styles["school-star__raiting"]}></div>
              <div className={Styles["school-likes__column"]}>
                <button
                  className={Styles["school-likes__button"]}
                  onClick={() => likeSchool(school._id)}
                  disabled={!!likes[school._id]}
                >
                  {likes[school._id] ? "Liked" : "Like"}
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
