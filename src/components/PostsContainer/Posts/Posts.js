import React, {useEffect, useState} from 'react';

import {Post} from "../Post/Post";
import {PostInfo} from "../PostInfo/PostInfo";
import styles from './Posts.module.css';
import {postsService} from "../../../services/postsService";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postInfo, setPostInfo] = useState(null);

    const showInfo = async (postId) => {
        const {data} = await postsService.getById(postId);
        setPostInfo(data);
    }

    useEffect(() => {
        postsService.getAllPosts().then(({data}) => setPosts(data));
    }, [])

    return (
        <div>
            <div className={styles.Posts}>
                {
                    posts.map(post => <Post key={post.id} post={post} showInfo={showInfo}/>)
                }
            </div>
            {
                postInfo && <PostInfo postInfo={postInfo}/>
            }
        </div>
    );
};

export {Posts};