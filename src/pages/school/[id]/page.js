import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../../data/data-utils';
import { raitingSchool } from '../../../data/data-utils';
import Styles from './school.module.css';
export default function Ochool(props) {
    const { id } = useParams(); // Извлекаем id из параметров URL// Проверяем значение id
    // Функция для поиска школы по id

    // Получаем информацию о школе по id
    const school = getSchoolById(id);
    const averageRaiting=raitingSchool(school);
    const classOfSchool=school.classes==="College"?"колледж":school.classes==="Vuz"?"вуз":"образовательную организацию";
    return (
        <div className={Styles["container"]}>
        <div className={Styles['information__block']}>
        <div className={Styles['column_information']}>
          <h1 className={Styles['school-title__name']}>{school.name}</h1>
          <p className={Styles['school-text__description']}>{school.description}</p>
          <h3 className={Styles['school-title__raiting']}>Рейтинг: {averageRaiting}</h3>
          <h4>Учился здесь? Оцени {classOfSchool} по 5 бальной шкале: </h4>
          <div className={Styles['school-star__raiting']}>
            </div>
          </div>
          <div className={Styles['school-image__block']}>
            <img src={school.imagelink} className={Styles['school-image__img']}></img>
          </div>
          </div>
      </div>
    );
  }