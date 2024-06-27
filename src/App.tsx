import { FC } from "react";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { AuthProvider } from "./contexts/context";
import "./app.css";
import { LikesProvider } from "./contexts/LikeContext";
export const App: FC = () => {
  return (
    <AuthProvider>
      <LikesProvider>
        <RouterProvider router={routes} />
      </LikesProvider>
    </AuthProvider>
  );
};
