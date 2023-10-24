import React, {useEffect} from 'react';
import {useForm,} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/carService";
import {carValidator} from "../../validators/carValidator";

const CarForm = ({setTrigger, carUpdate}) => {
    const {register, handleSubmit, reset, setValue, formState: {isValid, errors}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand, {shouldValidate: true});
            setValue('price', carUpdate.price, {shouldValidate: true});
            setValue('year', carUpdate.year, {shouldValidate: true});
        }
    }, [carUpdate])

    const addCar = async (car) => {
        if (carUpdate) {
            await carService.updateById(carUpdate.id, car);
        } else {
            await carService.create(car);
        }

        setTrigger(prev => !prev);
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(addCar)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})} />
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>Add car</button>
            </form>

            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};