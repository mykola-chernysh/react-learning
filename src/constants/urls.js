const baseURL = 'https://jsonplaceholder.typicode.com/';

const todos = '/todos';
const albums = '/albums';
const comments = '/comments';
const posts = '/posts';

const urls = {
    todos: todos,
    albums: albums,
    comments: comments,
    posts: {
        base: posts,
        postById: (postId) => `${posts}/${postId}`
    }
}

export {baseURL, urls};

