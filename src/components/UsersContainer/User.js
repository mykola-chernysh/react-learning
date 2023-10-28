import React from 'react';

const User = ({user}) => {
    const {name, username, email} = user;

    return (
        <div>
            <div>Name: {name}</div>
            <div>User name: {username}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export {User};