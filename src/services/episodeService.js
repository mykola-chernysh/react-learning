import {axiosService} from "./axiosService";
import {urls} from "../constants";

const episodesService = {
    getAll: (page = '1') => axiosService.get(urls.episodes.base, {params: {page}}),
    getById: (id) => axiosService.get(urls.episodes.byId(id)),
    getCharacters: (url) => url
}

export {episodesService};