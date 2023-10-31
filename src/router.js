import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts";
import {Users} from "./components/users-container/Users";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {postService} from "./services/postService";
import {userService} from "./services/userService";
import {CommentsPage} from "./pages/CommentsPage";
import {commentsService} from "./services/commentsService";

const router = createBrowserRouter([
    {index: true, element: <Navigate to={'users'}/>},
    {
        path: '',
        element: <MainLayouts/>,
        children: [
            {path: 'users',element: <Users/>},

            {
                path: 'user-details/:userId',
                element: <UserDetailsPage/>,
                loader: ({params: {userId}}) => userService.getUserById(userId),
                children: [

                    {
                        path: 'posts',
                        element: <PostsPage/>,
                        loader: ({params: {userId}}) => postService.getPostsByUserId(userId)
                    }
                ]
            },

            {
                path: 'post-details/:postId',
                element: <PostDetailsPage/>,
                loader: ({params: {postId}}) => postService.getPostById(postId),
                children: [

                    {
                        path: '',
                        element: <CommentsPage/>,
                        loader: ({params: {postId}}) => commentsService.getCommentsByPostId(postId)
                    }

                ]
            }
        ]
    }
])

export {router};