import React from 'react';

import styles from './Comment.module.css';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div className={styles.Comment}>
            <p><b>Post id:</b> {postId}</p>
            <p><b>Id:</b> {id}</p>
            <p><b>Name:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export {Comment};