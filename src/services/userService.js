import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    createUser: (user) => axiosService.post(urls.users, user)
}

export {userService};
