import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { School} from "../pages/School2/School2";
import data from '../data/data.json';
import { Ischool } from "../types/types";
import { ErrorNotFound } from "../pages/Error/Error";
const data2:Ischool[]=data as Ischool[];
export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<ErrorNotFound/>,
        children:[{
        path:'/',
        element:<Home/>
        },
        {
            path:'school/:id',
            element:<School data={data2}/>,
            errorElement:<ErrorNotFound/>
        }
    ]
    }
])