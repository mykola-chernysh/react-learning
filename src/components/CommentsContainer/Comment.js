import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, name, email, body} = comment;

    return (
        <Link to={`/posts/${postId}`}>
            <h3>Name: {name}</h3>
            <p><b>Email:</b> {email}</p>
            <p><b>Body:</b> {body}</p>
        </Link>
    );
};

export {Comment};