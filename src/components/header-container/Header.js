import React from 'react';

import css from './Header.module.css';
import {useAppContext} from "../../hooks";

const Header = () => {
    const {episode} = useAppContext();

    return (
        <div className={css.Header}>
            {episode ?
                <h1>{episode.name}</h1> :
                <h1>Rick & Morty</h1>}
        </div>
    );
};

export {Header};