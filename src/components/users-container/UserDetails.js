import React from 'react';

import styles from './UserDetails.module.css';
import {useNavigate} from "react-router-dom";

const UserDetails = ({user}) => {
    const {id, name, username, email, address: {city}, phone, website, company: {name: nameCompany}} = user;
    const navigate = useNavigate();

    return (
        <div className={styles.UserDetails}>
            <h1>Info about user</h1>
            <div className={styles.UserDetails_block}>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
                <p>User name: {username}</p>
                <p>Email: {email}</p>
                <p>City: {city}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <p>Name company: {nameCompany}</p>
            </div>

            <button onClick={() => navigate('posts')}>Posts of current user</button>
        </div>

    );
};

export {UserDetails};