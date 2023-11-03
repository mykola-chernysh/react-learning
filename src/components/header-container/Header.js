import React from 'react';

import css from './Header.module.css';
import {useAppContext} from "../../hooks";

const Header = () => {
    const {ep} = useAppContext();

    return (
        <div className={css.Header}>
            {ep ?
                <h1>{ep}</h1> :
                <h1>Rick & Morty</h1>}
        </div>
    );
};

export {Header};