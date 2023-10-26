import React, {useEffect, useState} from 'react';

import {Post} from "./Post";
import {postService} from "../../services/postService";
import styles from './Posts.module.css';

const Posts = ({postId}) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getPostById(postId).then(({data}) => setPost(data))
    }, [postId])

    return (
        <div className={styles.Posts}>
            {
                <Post key={post.id} post={post}/>
            }
        </div>
    );
};

export {Posts};