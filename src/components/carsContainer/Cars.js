import React from 'react';

import {Car} from "./Car";

const Cars = ({cars, setCarUpdate, setTrigger}) => {
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} setCarUpdate={setCarUpdate} setTrigger={setTrigger}/>)
            }
        </div>
    );
};

export {Cars};