import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    createUser: (user) => axiosService.post(urls.users, user)
}

export {userService};
