import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './Characters.module.css';
import {Character} from "./Character";
import {episodesActions} from "../../redux";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.episodes);
    const navigate = useNavigate();
    const {ids} = useParams();

    useEffect(() => {
        dispatch(episodesActions.getEpisodeCharacters({ids}));
    }, [dispatch, ids]);

    return (
        <div>
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
        </div>
    );
};

export {Characters};