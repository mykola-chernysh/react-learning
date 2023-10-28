import React from 'react';

import {Comment} from "./Comment";
import styles from './Comments.module.css';

const Comments = ({comments}) => {
       return (
        <div className={styles.Comments}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};