import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import css from './Characters.module.css';
import {Character} from "./Character";
import {useAppContext} from "../../hooks";
import {episodesService} from "../../services";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();
    const {state: id} = useLocation();
    const {setEpisode} = useAppContext();


    useEffect(() => {
        const getCharacter = async () => {
            const data = await episodesService.getById(id).then(({data}) => data);
            setEpisode(data);

            const character = await Promise.all(data.characters.map(character => {
                return fetch(character).then(value => value.json());
            }));

            setCharacters(character);
        }

        getCharacter().then();
    }, []);

    return (
        <div className={css.Characters}>
            <button onClick={() => {
                navigate(-1);
                setEpisode(null);
            }}>Back</button>
            <div className={css.Characters_block}>
                {
                    characters.map((character, index) => <Character key={index} character={character}/>)
                }
            </div>
        </div>
    );
};

export {Characters};