import {FC } from "react";
import  {Cards}  from "./components/Cards/Cards";
import React from "react";
import data from './data/data.json';
import { Ischool } from "./types/types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import School from "./school/[id]/page.js";
export const App:FC=()=>{
  const data2:Ischool[]=data as Ischool[];
  return(
      <main>
        <Routes>
          <Route path="/" element={<Cards data={data2} />} />
          <Route path="/school/:id" element={<School data={data2} />} />
        </Routes>
      </main>
  )
};