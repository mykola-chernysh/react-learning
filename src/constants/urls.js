const baseURL = 'https://rickandmortyapi.com/api/';

const episodes = '/episode';

const urls = {
    episodes: {
        base: episodes,
        byId: (id) => `${episodes}/${id}`
    }
}

export {baseURL, urls};