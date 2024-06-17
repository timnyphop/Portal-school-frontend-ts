import { FC, useState, useEffect } from "react";
import { Banner } from "../../components/Banner/Banner";
import { Cards } from "../../components/Cards/Cards";
import { Promo } from "../../components/Promo/Promo";

export const Home: FC = () => {
  return (
    <>
      <Banner />
      <Cards />
      <Promo />
    </>
  );
};
