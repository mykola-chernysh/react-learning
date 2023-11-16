import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './Episode.module.css';
import {episodesActions} from "../../../redux";

const Episode = ({episode}) => {
    const {id, name, episode: ep, characters} = episode;
    const dispatch = useDispatch();

    const setNameEp = (nameEp) => {
        dispatch(episodesActions.setNameEpisode(nameEp));
    }

    const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');

    return (
        <Link to={`/characters/${ids}`} className={css.Episode} onClick={() => setNameEp(name)}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Chapter: {ep}</div>
        </Link>
    );
};

export {Episode};