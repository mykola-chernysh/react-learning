import {apiService} from "./apiService";
import {urls} from "../constants";

class CommentsService{
    getAll() {
        return apiService.get(urls.comments);
    }
}

export const commentsService = new CommentsService();