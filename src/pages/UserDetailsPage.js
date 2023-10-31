import React from 'react';

import {UserDetails} from "../components/users-container/UserDetails";
import {Outlet, useLoaderData} from "react-router-dom";

const UserDetailsPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <UserDetails user={data}/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};