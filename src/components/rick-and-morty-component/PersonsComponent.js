import {useEffect, useState} from "react";

import {PersonComponent} from "./PersonComponent";
import styles from "../rick-and-morty-component/Person.module.css";

const PersonsComponent = () => {
    const [characters, setPersons] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/[111,222,333,444,555,666]')
            .then(value => value.json())
            .then(value => setPersons(value))
    }, []);

    return (
        <div className={styles.character_container}>
            {
                characters.map(character => (
                    <PersonComponent person={character} key={character.id}/>
                ))
            }
        </div>
    );
};

export {PersonsComponent};