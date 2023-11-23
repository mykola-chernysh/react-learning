import {Component} from "react";

import css from './Cars.module.css';
import {carsService} from "../../services";
import {Car} from "./Car";

class Cars extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        carsService.getAll().then(({data}) => this.setState({cars: data}));
    }

    render() {
        return (
            <div className={css.Cars_container}>
                <h1>Cars</h1>

                <div className={css.Cars}>
                    {
                        this.state.cars.map(car => <Car key={car.id} car={car}/>)
                    }
                </div>
            </div>
        )
    }
}

export {Cars};