import { FC } from "react";
import  {Cards}  from "./components/Cards/Cards";
import React from "react";
import data from './data/data.json';
import { Ischool } from "./types/types";
import {Routes, Route, Outlet, RouterProvider } from "react-router-dom";
import School from "./pages/school/[id]/page.js";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import {Layout} from './pages/Layout/Layout';
import { routes } from "./routes/routes";
const data2:Ischool[]=data as Ischool[];
export const App:FC=()=>{
  
  return(
      <RouterProvider router={routes}/>
  )
};