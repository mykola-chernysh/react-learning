import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    addComment: (comment) => axiosService.post(urls.comments, comment)
}

export {commentService};
