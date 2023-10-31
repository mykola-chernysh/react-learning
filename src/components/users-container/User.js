import React from 'react';
import {useNavigate} from "react-router-dom";

import styles from './User.module.css';

const User = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();

    return (
        <div className={styles.User}>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <button onClick={() => navigate(`/user-details/${id}`)}>Info about user</button>
        </div>
    );
};

export {User};