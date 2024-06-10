import { FC } from "react"
import React from "react";
import Styles from './Cards.module.css';
import { Ischool } from "../../types/types";
import { Link } from "react-router-dom";
interface CardsProps{
    data:Ischool[]
}

export  const Cards:FC<CardsProps>=({data})=>{
    
    return(
    <div>
        {data.map((data,index,item)=>
            <div className={Styles['container']} key={index}>
                <Link to={`/school/${data.id}`} key={index}>
                    <div className={Styles['Cards']}>
                    <h1 className={Styles['Card-title__text']}key={data.id}>{data.name}</h1>
                    <p className={Styles['Card-description__text']} key={`${data.id}-${index}`}>{data.description}</p>
                 </div>
            </Link>
         </div>
                )
            }

        </div>
    )
}
