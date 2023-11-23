import React from 'react';

import {Comments, Posts} from "./components";

const App = () => {
    return (
        <div>
            <Posts/>
            <Comments/>
        </div>
    );
};

export {App};