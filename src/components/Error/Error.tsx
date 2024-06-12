import { FC } from 'react';
import Styles from './Error.module.css';
export const ErrorNotFound:FC=()=>{
    return(
        <>
        <h1 className={Styles['error__title']}>Error 404</h1>
        <h2 className={Styles['error__untitle']}> Not found🫠</h2>
        </>
    )
}