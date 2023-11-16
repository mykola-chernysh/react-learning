import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './Characters.module.css';
import {Character} from "./Character";
import {charactersActions} from "../../redux";

const Characters = () => {
    const {characters} = useSelector(state => state.characters);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {ids} = useParams();

    useEffect(() => {
        dispatch(charactersActions.getCharacters({ids}));
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