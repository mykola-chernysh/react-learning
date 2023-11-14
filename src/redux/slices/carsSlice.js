import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars: [],
    car: null,
    trigger: false
};

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },

        updateCar: (state, action) => {
            state.car = action.payload;
        },

        changeTrigger: (state, action) => {
            state.trigger = action.payload;
        }

    }
});

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {...actions};

export {
    carsReducer,
    carsActions
};