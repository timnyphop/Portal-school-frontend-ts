import { FC } from "react";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
export const App: FC = () => {
  return (
    <>
      <RouterProvider router={routes} />
      <h1>{}</h1>
    </>
  );
};
