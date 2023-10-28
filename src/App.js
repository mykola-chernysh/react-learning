import React from 'react';

import {UsersContainer} from "./components/UsersContainer/UsersContainer";
import {CommentsContainer} from "./components/CommentsContainer/CommentsContainer";
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <UsersContainer/>
            <CommentsContainer/>
        </div>
    );
};

export {App};