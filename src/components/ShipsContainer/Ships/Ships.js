import React, {useEffect, useState} from 'react';

import styles from './Ships.module.css';
import {baseURL} from "../../../constants/urls";
import {Ship} from "../Ship/Ship";

const Ships = () => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        fetch(baseURL)
            .then(value => value.json())
            .then(value => setShips(value));
    }, [])

    return (
        <div className={styles.Ships}>
            {
                ships.filter(ship => ship.launch_year < 2020)
                    .map((ship, index) => <Ship key={index} ship={ship}/>)

            }
        </div>
    );
};

export {Ships};