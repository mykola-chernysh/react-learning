import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import css from './Characters.module.css';
import {Character} from "./Character";
import {useAppContext} from "../../hooks";
import {charactersService} from "../../services/charactersService";

const Characters = () => {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);
    const {chars} = useAppContext();

    useEffect(() => {
        charactersService.getEpisodeCharacters(chars).then(value => setCharacters(value));
    }, [chars]);

    console.log(characters);

    return (
        <div className={css.Characters}>
            <button onClick={() => {
                navigate(-1);
            }}>Back
            </button>
            <div className={css.Characters_block}>
                {
                   characters.map((character, index) => <Character key={index} character={character}/>)
                }
            </div>
        </div>
    );
};

export {Characters};