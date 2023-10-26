import React from 'react';
import {useLocation} from "react-router-dom";

import {Posts} from "../components/PostContainer/Posts";

const PostPage = () => {
    const {state: postId} = useLocation();

    return (
        <div>
            <Posts postId={postId}/>
        </div>
    );
};

export {PostPage};