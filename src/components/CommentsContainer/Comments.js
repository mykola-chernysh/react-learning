import React, {useEffect, useState} from 'react';

import {commentService} from "../../services/commentService";
import {Comment} from "./Comment";
import styles from './Comments.module.css';

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    });

    return (
        <div className={styles.Comments}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};