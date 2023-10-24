import React from 'react';

import {UserForm} from "./components/userForm/UserForm";
import {CommentForm} from "./components/commentForm/CommentForm";
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <UserForm/>
            <CommentForm/>
        </div>
    );
};

export {App};