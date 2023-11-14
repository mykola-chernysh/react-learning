import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Cars.module.css';
import {carsService} from "../../../services";
import {carsActions} from "../../../redux";
import {Car} from "../Car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.cars);

    useEffect(() => {
        carsService.getAll().then(({data}) => dispatch(carsActions.setCars(data)))
    }, [trigger, dispatch]);

    return (
        <div className={css.Cars}>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};