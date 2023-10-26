import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import styles from './Main.module.css';

const Main = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.Main}>
                <NavLink to={'/main'}>Home</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
                <NavLink to={'/albums'}>Albums</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </div>
            <div className={styles.Main_buttons}>
                <button onClick={() => navigate(-1)}></button>
                <button onClick={() => navigate(1)}></button>
            </div>
        </>
    );
};

export {Main};