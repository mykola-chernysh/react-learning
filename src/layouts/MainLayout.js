import React from 'react';
import {Outlet} from "react-router-dom";

import {Main} from "../components/MainSection/Main";
import styles from './MainLayouts.module.css';

const MainLayout = () => {
    return (
        <div className={styles.MainLayouts}>
            <Main/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};