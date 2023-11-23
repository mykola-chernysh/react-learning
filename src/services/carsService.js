import {apiService} from "./apiService";
import {urls} from "../constants";

class CarsService {
    getAll() {
        return apiService.get(urls.cars);
    }
}

export const carsService = new CarsService();