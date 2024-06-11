import { Outlet} from 'react-router-dom';

import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
export const Layout:FC=()=>{
    return(
        <>
          <Header/>
          <Outlet/>
          <Footer/>
          </>
    )
}