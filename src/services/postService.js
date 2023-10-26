import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getPostById: (postId) => axiosService.get(urls.posts.postById(postId))
}

export {postService};
