import React from 'react';

import styles from './Ship.module.css';

const Ship = ({ship}) => {
    const {mission_name, launch_year, links} = ship;

    return (
        <div className={styles.Ship}>
            <h2>Mission name: {mission_name}</h2>
            <p>Launch year: {launch_year}</p>
            <img src={links['mission_patch_small']} alt="mission_name"/>
        </div>
    );
};

export {Ship};