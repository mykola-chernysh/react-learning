import React from 'react';

import styles from './PostDetails.module.css'

const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;

    return (
        <div className={styles.PostDetails}>
            <h1>Info about post</h1>
            <div className={styles.PostDetails_block}>
                <p><b>User id:</b> {userId}</p>
                <p><b>Id:</b> {id}</p>
                <p><b>Title:</b> {title}</p>
                <p><b>Body:</b> {body}</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export {PostDetails};