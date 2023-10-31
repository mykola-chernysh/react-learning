import React from 'react';
import {Link} from "react-router-dom";

import styles from './Post.module.css';

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div className={styles.Post}>
            <p>Title: {title}</p>
            <Link to={`/post-details/${id}`}>Info about post</Link>
        </div>
    );
};

export {Post};