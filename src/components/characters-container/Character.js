import React from 'react';

import css from './Character.module.css';

const Character = ({character}) => {
    const {id, name, image} = character;
    return (
        <div>
            <div className={css.Character}>
                <div>id: {id}</div>
                <div>Name: {name}</div>
                <img src={image} alt={name}/>
            </div>
        </div>
    );
};

export {Character};