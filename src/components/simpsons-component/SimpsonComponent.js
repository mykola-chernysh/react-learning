import React from 'react';

import styles from './Simpsons.module.css';

const SimpsonComponent = ({simpson}) => {
    return (
        <div className={styles.member}>
            <div className={styles.member_description}>
                <h3>{simpson.name} {simpson.surname}</h3>
                <p className={styles.member_age}>Вік {simpson.age}.</p>
                <p className={styles.member_info}>{simpson.info}</p>
            </div>
            <div className={styles.member_photo_container}>
                <img src={simpson.photo} alt={simpson.name} className={styles.member_photo}></img>
            </div>
        </div>
    );
};

export {SimpsonComponent};