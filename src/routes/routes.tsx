import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout/Layout";
import { Home } from "../pages/Home/home";
import { School2 } from "../pages/School2/School2";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[{
        path:'/',
        element:<Home/>
        },
        {
            path:'school/[id]',
            element:<School2/>
        }
    ]
    }
])