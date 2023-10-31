import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import {PostDetails} from "../components/posts-container/PostDetails";

const PostDetailsPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <PostDetails post={data}/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};