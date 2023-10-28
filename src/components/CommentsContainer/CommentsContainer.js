import React, {useEffect, useState} from 'react';

import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";
import {commentService} from "../../services/commentService";
import styles from './CommentsContainer.module.css';

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAllComments().then(({data}) => setComments(data))
    }, [])

    return (
        <div className={styles.CommentsContainer}>
            <CommentForm setComments={setComments}/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};