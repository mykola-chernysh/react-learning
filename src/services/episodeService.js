import {axiosService} from "./axiosService";
import {urls} from "../constants";

const episodesService = {
    getAll: (page = '1') => axiosService.get(urls.episodes.base, {params: {page}})
}

export {episodesService};