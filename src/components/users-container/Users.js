import React, {useEffect, useState} from 'react';

import {User} from "./User";
import {userService} from "../../services/userService";
import styles from './Users.module.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data));
    }, [])

    return (
        <div className={styles.Users}>
            <h1>Users</h1>
            <div className={styles.Users_block}>

                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export {Users};