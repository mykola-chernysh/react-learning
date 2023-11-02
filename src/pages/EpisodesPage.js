import React from 'react';

import {Episodes} from "../components";
import css from './EpisodesPage.module.css';

const EpisodesPage = () => {
    return (
        <div className={css.EpisodesPage}>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};