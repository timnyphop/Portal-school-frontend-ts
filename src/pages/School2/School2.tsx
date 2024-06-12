import Styles from './School2.module.css';
import { useParams } from "react-router-dom";
import { Ischool } from "../../types/types";
import { ErrorNotFound } from "../../components/Error/Error";
import { raitingSchool } from "../../data/data-utils";
interface data{
    data:Ischool[];
}
export const School=({data}:data)=>{
    const {id}=useParams();
    const id2=Number(id);
    const school=data[id2-1];
    const averageRaiting=raitingSchool(school);
    const classOfSchool=school.classes==="College"?"колледж":school.classes==="Vuz"?"вуз":"образовательную организацию";
    
    return(
       <>
       {school?(
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
       ):(
        <ErrorNotFound/>
       )
}
        </>
        
    )
}