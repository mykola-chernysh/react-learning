import React from 'react';

const Todo = ({todo}) => {
    const {title, completed} = todo;

    return (
        <div>
            <h3>Title: {title}</h3>
            <span>Is completed: <b>{completed.toString()}</b></span>
        </div>
    );
};

export {Todo};