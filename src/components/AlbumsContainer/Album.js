import React from 'react';

const Album = ({album}) => {
    const {title} = album;

    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

export {Album};