import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService = {
    getAllPosts: () => axiosService.get(urls.posts.base),
    getById: (id) => axiosService.get(urls.posts.byId(id))
}

export {postsService};

