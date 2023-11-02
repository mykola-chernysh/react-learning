import React from 'react';
import {Link} from "react-router-dom";

import css from './Episode.module.css';

const Episode = ({episode}) => {
    const {id, name, episode: ep} = episode;

    return (
        <Link to={'/characters'} state={id} className={css.Episode}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Chapter: {ep}</div>
        </Link>
    );
};

export {Episode};