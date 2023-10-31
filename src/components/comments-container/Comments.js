import React from 'react';

import {Comment} from "./Comment";
import styles from './Comments.module.css';

const Comments = ({comments}) => {
    return (
        <div className={styles.Comments}>
            <h1>Post comments</h1>
            <div className={styles.Comments_block}>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    );
};

export {Comments};