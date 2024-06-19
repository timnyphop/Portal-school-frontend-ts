import { FC } from "react";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
export const App: FC = () => {
  return (
    <body>
      <RouterProvider router={routes} />
    </body>
  );
};
