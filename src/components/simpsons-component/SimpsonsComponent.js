import React from 'react';

import {SimpsonComponent} from "./SimpsonComponent";
import {simpsons} from "../../data/data";
import style from './Simpsons.module.css';


const SimpsonsComponent = () => {
    return (
        <div className={style.simpsons_block}>
            {
                simpsons.map((simpson, index) => (
                    <SimpsonComponent simpson={simpson} key={index}/>
                ))
            }
        </div>
    );
};

export {SimpsonsComponent};