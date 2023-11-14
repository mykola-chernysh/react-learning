import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import css from './CarForm.module.css';
import {carValidator} from "../../../validators";
import {carsService} from "../../../services";
import {carsActions} from "../../../redux";

const CarForm = () => {
    const {register, reset, handleSubmit, setValue, formState: {isValid, errors}} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });
    const dispatch = useDispatch();
    const {car, trigger} = useSelector(state => state.cars);

    useEffect(() => {
        if (car) {
            setValue('brand', car.brand, {shouldValidate: true});
            setValue('price', car.price, {shouldValidate: true});
            setValue('year', car.year, {shouldValidate: true});
        }
    }, [car, setValue]);

    const addCar = async (newCar) => {
        if (car) {
            await carsService.updateById(car.id, newCar);
            dispatch(carsActions.changeTrigger(!trigger))
        } else {
            await carsService.create(newCar);
            dispatch(carsActions.changeTrigger(!trigger))
        }

        reset();
    }

    return (
        <div className={css.CarForm}>
            <form onSubmit={handleSubmit(addCar)}>
                <fieldset>
                    <legend>Create car</legend>
                    <input type="text" placeholder={'Enter the brand'} {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                    <input type="text" placeholder={'Enter price'} {...register('price', {valueAsNumber: true})}/>
                    {errors.price && <div>{errors.price.message}</div>}
                    <input type="text" placeholder={'Enter the year'} {...register('year', {valueAsNumber: true})}/>
                    {errors.year && <div>{errors.year.message}</div>}
                    <button disabled={!isValid}>{car ? 'Update': 'Create'}</button>
                </fieldset>
            </form>
        </div>
    );
};

export {CarForm};