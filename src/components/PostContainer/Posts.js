import React from 'react';

import {Post} from "./Post";
import styles from './Posts.module.css';

const Posts = ({post}) => {

    return (
        <div className={styles.Posts}>
            {
                <Post post={post}/>
            }
        </div>
    );
};

export {Posts};