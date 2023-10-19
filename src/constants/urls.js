const baseURL = 'https://jsonplaceholder.typicode.com';
const postsURL = '/posts';

const urls = {
    posts: {
        base: postsURL,
        byId: (id) => `${postsURL}/${id}`
    }
}

export {
    baseURL,
    urls
}
