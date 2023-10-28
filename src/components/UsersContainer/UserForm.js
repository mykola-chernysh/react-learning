import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userService} from "../../services/userService";
import {userValidator} from "../../validators/userValidator";
import styles from './UserForm.module.css';

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {isValid, errors}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const addUser = async (user) => {
        const {data} = await userService.createUser(user);
        setUsers(prev => [...prev, data]);
        reset();
    }


    return (
        <div className={styles.UserFormWrapper}>
            <form onSubmit={handleSubmit(addUser)} className={styles.UserForm}>
                <h2>Create user</h2>
                <input type="text" placeholder={'Name'} {...register('name')}/>
                <input type="text" placeholder={'User name'} {...register('username')}/>
                <input type="text" placeholder={'Email'} {...register('email')}/>
                {/*<input type="text" placeholder={'Street'} {...register('address.street')}/>
                <input type="text" placeholder={'Suite'} {...register('address.suite')}/>
                <input type="text" placeholder={'City'} {...register('address.city')}/>
                <input type="text" placeholder={'Zipcode'} {...register('address.zipcode')}/>
                <input type="text" placeholder={'lat'} {...register('address.geo.lat')}/>
                <input type="text" placeholder={'lng'} {...register('address.geo.lng')}/>
                <input type="text" placeholder={'Phone'} {...register('phone')}/>
                <input type="text" placeholder={'Website'} {...register('website')}/>
                <input type="text" placeholder={'Company name'} {...register('company.name')}/>
                <input type="text" placeholder={'Catch phrase'} {...register('company.catchPhrase')}/>
                <input type="text" placeholder={'Business services'} {...register('company.bs')}/>*/}
                <button disabled={!isValid}>Create user</button>
            </form>

            <div className={styles.UserForm_errors}>
                {errors.name && <div>{errors.name.message}</div>}
                {errors.username && <div>{errors.username.message}</div>}
                {errors.email && <div>{errors.email.message}</div>}
            </div>
        </div>
    );
};

export {UserForm};