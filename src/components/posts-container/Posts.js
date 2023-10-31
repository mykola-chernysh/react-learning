import React from 'react';

import {Post} from "./Post";
import styles from './Posts.module.css';

const Posts = ({posts}) => {

    return (
        <div className={styles.Posts}>
            <h1>User posts</h1>
            <div className={styles.Posts_block}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export {Posts};