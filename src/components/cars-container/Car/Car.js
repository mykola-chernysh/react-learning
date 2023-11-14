import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Car.module.css';
import {carsActions} from "../../../redux";
import {carsService} from "../../../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();
    const {trigger} = useSelector(state => state.cars);

    const deleteCar = async (idCar) => {
        await carsService.deleteById(idCar);
        dispatch(carsActions.changeTrigger(!trigger));
    }

    return (
        <div className={css.Car}>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(carsActions.updateCar(car))}>Update</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};

export {Car};