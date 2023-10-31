import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const commentsService = {
    getCommentsByPostId: (id) => axiosService.get(urls.comments.commentsByPostId(id))
}

export {commentsService};