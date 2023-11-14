import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {CarsPage} from "./pages";
import {Cars} from "./components";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayouts/>, children: [
            {index: true, element: <Navigate to={'cars'}/>},
            {path: 'cars', element: <CarsPage/>, children: [
                    {path: '', element: <Cars/>}
                ]
            }
        ]
    }
]);

export {router};