import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { School} from "../pages/School2/School2";
import data from '../data/data.json';
import { Ischool } from "../types/types";
const data2:Ischool[]=data as Ischool[];
export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[{
        path:'/',
        element:<Home/>
        },
        {
            path:'school/:id',
            element:<School data={data2}/>
        }
    ]
    }
])