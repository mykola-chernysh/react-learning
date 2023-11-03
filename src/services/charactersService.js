const charactersService = {
    getEpisodeCharacters: async (urlsArray) => await Promise.all(urlsArray.map(url => fetch(url).then(value => value.json())))
}

export {charactersService};