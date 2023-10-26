import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {HomePage} from "./pages/HomePage";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostPage} from "./pages/PostPage";
import {ErrorPage} from "./pages/ErrorPage";
import {postService} from "./services/postService";

const router = createBrowserRouter([
        {
            path: '',
            element: <MainLayout/>,
            errorElement: <ErrorPage/>,
            children: [
                {index: true, element: <Navigate to={'main'}/>},
                {path: '/main', element: <HomePage/>},
                {path: '/todos', element: <TodosPage/>},
                {path: '/albums', element: <AlbumsPage/>},
                // {path:'/comments', element: <CommentsPage/>},
                {
                    path: '/comments',
                    element: <CommentsPage/>,
                    loader: () => postService.getAll().then(({data}) => data)
                },
                {
                    path: '/posts/:id',
                    element: <PostPage/>,
                    loader: ({params: {id}}) => postService.getPostById(id).then(({data}) => data)
                }
            ]
        },
    ])
;

export {router};