import { FC } from "react"
import { Banner } from "../../components/Banner/Banner"
import { Cards } from "../../components/Cards/Cards"
import { Ischool } from "../../types/types"
import data from '../../data/data.json';
import { Promo } from "../../components/Promo/Promo";
export const Home:FC=()=>{
    const data2:Ischool[]=data as Ischool[];
    return(
    <>
    <Banner/>
    <Cards data={data2}/>
    <Promo/>
    </>
    )
}