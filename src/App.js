import React from 'react';
import {SimpsonsComponent} from "./components/simpsons-component/SimpsonsComponent";
import {PersonsComponent} from "./components/rick-and-morty-component/PersonsComponent";

const App = () => {
    return (
        <div>
            <SimpsonsComponent/>
            <PersonsComponent/>
        </div>
    );
};

export {App};