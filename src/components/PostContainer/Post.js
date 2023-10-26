import React from 'react';

const Post = ({post}) => {
    const {id, title, body} = post;

    return (
        <div>
            <span>Id: {id}</span>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export {Post};