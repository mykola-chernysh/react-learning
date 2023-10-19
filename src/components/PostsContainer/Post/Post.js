import React from 'react';

import styles from './Post.module.css';

const Post = ({post, showInfo}) => {
    const {id, title} = post;

    return (
        <div className={styles.Post}>
            <div>Id: {id}</div>
            <h3>Title: {title}</h3>
            <button onClick={() => showInfo(id)}>Show all info</button>
        </div>
    );
};

export {Post};