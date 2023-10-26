import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => axiosService.get(urls.posts.base),
    getPostById: (postId) => axiosService.get(urls.posts.postById(postId))
}

export {postService};
