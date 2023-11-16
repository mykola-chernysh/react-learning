import React from 'react';

import css from './CharactersPage.module.css';
import {Characters} from "../components";

const CharactersPage = () => {
    return (
        <div className={css.CharactersPage}>
            <Characters/>
        </div>
    );
};

export {CharactersPage};