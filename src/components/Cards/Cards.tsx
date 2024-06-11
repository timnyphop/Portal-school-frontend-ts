
import React from "react";
import Styles from './Cards.module.css';
import { Ischool } from "../../types/types";
import { Link } from "react-router-dom";
interface CardsProps{
    data:Ischool[]
}
export const Cards=({data}:CardsProps)=>{
    const colleges=data.filter(data => data.classes === 'College');
    const university=data.filter(data=>data.classes==='vuz');
      return(
        <>
        <div className={Styles['container']}>
          <h1 className={Styles['card-title']}>Колледжи: </h1>
          <div className={Styles['cards_container']}>
          
          <div className={Styles['CardsList']} id='recommendations'>
              {colleges.map((data, index) => (
                <Link to={`/school/${data.id}`} key={data.id} className={Styles['card__link']}>
                  
                  <div className={Styles['Cards']}>
           <h1 className={Styles['Card-title__text']}key={index}>{data.name}</h1>
           <p className={Styles['Card-description__text']} key={index}>{data.description}</p>
         </div>
         </Link>
        ))}
          
          </div>
          </div>
          <h1 className={Styles['card-title']}>Университеты</h1>
          <div className={Styles['cards_container']}>
          
          <div className={Styles['CardsList']} id='recommendations'>
              {university.map((data, index) => (
                <Link to={`/school/${data.id}`} key={data.id} className={Styles['card__link']}>
                  
                  <div className={Styles['Cards']}>
           <h1 className={Styles['Card-title__text']}key={index}>{data.name}</h1>
           <p className={Styles['Card-description__text']} key={index}>{data.description}</p>
         </div>
         </Link>
        ))}
          </div>
          </div>
          </div>
  
      
  </>
      )}

