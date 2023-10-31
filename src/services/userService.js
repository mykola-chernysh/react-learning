import {axiosService} from "./axiosService";

import {urls} from "../constans/urls";

const userService = {
    getAllUsers: () => axiosService.get(urls.users.base),
    getUserById: (id) => axiosService.get(urls.users.byUserId(id)),
}

export {userService};