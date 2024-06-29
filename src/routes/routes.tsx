import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout/Layout";
import { Home } from "../pages/Home/home";
import { SchoolPage } from "../pages/School2/School2";
import { ErrorNotFound } from "../pages/Error/Error";
import { PromoPage } from "../pages/Promo/Promo";
import { AuthPage } from "../pages/Auth/Auth";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "school/:id",
        element: <SchoolPage />,
        errorElement: <ErrorNotFound />,
      },
      {
        path: "promo",
        element: <PromoPage />,
      },
    ],
  },
]);
