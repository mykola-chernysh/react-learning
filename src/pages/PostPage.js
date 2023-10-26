import React from 'react';
import {useLoaderData} from "react-router-dom";

import {Posts} from "../components/PostContainer/Posts";

const PostPage = () => {
    const post = useLoaderData();

    return (
        <div>
            <Posts post={post}/>
        </div>
    );
};

export {PostPage};