const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users: {
        base: users,
        byUserId: (id) => `${users}/${id}`
    },
    posts: {
        postsByUserId: (id) => `${users}/${id}/${posts}`,
        postById: (id) => `${posts}/${id}`
    },
    comments: {
        commentsByPostId: (id) => `${posts}/${id}/${comments}`
    }
}

export {baseURL, urls};