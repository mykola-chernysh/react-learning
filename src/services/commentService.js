import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getAllComments: () =>axiosService.get(urls.comments),
    addComment: (comment) => axiosService.post(urls.comments, comment)
}

export {commentService};
