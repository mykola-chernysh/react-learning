import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const postService = {
    getPostsByUserId: (id) => axiosService.get(urls.posts.postsByUserId(id)),
    getPostById: (id) => axiosService.get(urls.posts.postById(id))
}

export {postService};
