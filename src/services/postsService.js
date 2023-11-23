import {apiService} from "./apiService";
import {urls} from "../constants";

class PostsService{
    getAll() {
        return apiService.get(urls.posts);
    }
}

export const postsService = new PostsService();