import React from 'react';

import {User} from "./User";
import styles from './Users.module.css';

const Users = ({users}) => {
    return (
        <div className={styles.Users}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};