import React, {useEffect, useState} from 'react';

import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [carUpdate, setCarUpdate] = useState(null);

   useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
   }, [trigger]);

    return (
        <div>
            <CarForm setTrigger={setTrigger} carUpdate={carUpdate}/>
            <hr/>
            <Cars cars={cars} setCarUpdate={setCarUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarsContainer};