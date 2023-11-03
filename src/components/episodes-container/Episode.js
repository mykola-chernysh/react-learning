import React from 'react';
import {Link} from "react-router-dom";

import css from './Episode.module.css';
import {useAppContext} from "../../hooks";

const Episode = ({episode}) => {
    const {id, name, episode: ep, characters} = episode;
    const {setChars, setEp} = useAppContext();

    return (
        <Link
            to={'/characters'}
            onClick={() => {
            setChars(characters);
            setEp(name);}}
            className={css.Episode}
        >
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Chapter: {ep}</div>
        </Link>
    );
};

export {Episode};