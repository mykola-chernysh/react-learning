import React from 'react';

import styles from "../rick-and-morty-component/Person.module.css";

const PersonComponent = ({person}) => {
    return (
        <div className={styles.character}>
            <div className={styles.character_description}>
                <h2>ID: {person.id}</h2>
                <h3><b>Name:</b> {person.name}</h3>
                <p><b>Status:</b> {person.status}</p>
                <p><b>Species:</b> {person.species}</p>
                <p><b>Gender:</b> {person.gender}</p>
            </div>
            <div className={styles.character_photo_container}>
                <img src={person.image} alt={person.name} className={styles.character_photo}></img>
            </div>
        </div>
    );
};

export {PersonComponent};