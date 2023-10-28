import React, {useEffect, useState} from 'react';

import {Users} from "./Users";
import {UserForm} from "./UserForm";
import {userService} from "../../services/userService";
import styles from './UsersContainer.module.css';

const UsersContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={styles.UsersContainer}>
            <UserForm setUsers={setUsers}/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};