import React from 'react';
import {Outlet} from "react-router-dom";

import {CarForm} from "../components";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <Outlet/>
        </div>
    );
};

export {CarsPage};