import {Component} from "react";

import css from './Car.module.css';
class Car extends Component{

    render() {
        const {id, brand, price, year} = this.props.car;

        return (
            <div className={css.Car}>
                <div>Id: {id}</div>
                <div>Brand: {brand}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
        )
    }
}

export {Car};