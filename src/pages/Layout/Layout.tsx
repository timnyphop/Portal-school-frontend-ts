import { Outlet } from "react-router-dom";

import { FC } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { AuthModal } from "../../components/Auth/Auth";
export const Layout: FC = () => {
  return (
    <>
      <Header />
      <AuthModal />
      <Outlet />
      <Footer />
    </>
  );
};
