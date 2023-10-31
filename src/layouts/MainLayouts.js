import React from 'react';

import styles from './MainLayouts.module.css';
import {Outlet, useNavigate} from "react-router-dom";

const MainLayouts = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.MainLayouts}>
            <div className={styles.MainLayouts_buttons}>
                <button onClick={() => navigate(-1)}></button>
                <button onClick={() => navigate(1)}></button>
            </div>

            <Outlet/>
        </div>
    );
};

export {MainLayouts};