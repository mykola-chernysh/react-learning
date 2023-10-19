import React from 'react';

import styles from './PostInfo.module.css';

const PostInfo = ({postInfo}) => {
    const {userId, id, title, body} = postInfo;

    return (
        <div className={styles.Post_info}>
            <p><b>UserId:</b> {userId}</p>
            <p><b>Id:</b> {id}</p>
            <p><b>Title:</b> {title}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export {PostInfo};