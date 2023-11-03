import React, {useEffect} from 'react';

import {Episodes} from "../components";
import css from './EpisodesPage.module.css';
import {useAppContext} from "../hooks";

const EpisodesPage = () => {
    const {setEp} = useAppContext();

    useEffect(() => {
        setEp(null);
    }, []);

    return (
        <div className={css.EpisodesPage}>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};