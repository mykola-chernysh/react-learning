import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './EpisodesPage.module.css';
import {Episodes} from "../components";
import {episodesActions} from "../redux";


const EpisodesPage = () => {
    const dispatch = useDispatch();
    const {errors} = useSelector(state => state.episodes);


    useEffect(() => {
        dispatch(episodesActions.setNameEpisode(null));
    }, [dispatch]);

    return (
        errors ? <span>{errors.error}</span>
            : <div className={css.EpisodesPage}>
                <Episodes/>
            </div>

    );
};

export {EpisodesPage};