import React from 'react';
import {Comments} from "../components/comments-container/Comments";
import {useLoaderData} from "react-router-dom";

const CommentsPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <Comments comments={data}/>
        </div>
    );
};

export {CommentsPage};