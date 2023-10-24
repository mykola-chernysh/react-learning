import React from 'react';

import {carService} from "../../services/carService";

const Car = ({car, setCarUpdate, setTrigger}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async (idCar) => {
        await carService.deleteById(idCar);
        setTrigger(prev => !prev);
    }

    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => setCarUpdate(car)}>Update</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};

export {Car};