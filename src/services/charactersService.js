import {apiService} from "./apiService";
import {urls} from "../constants";

const charactersService = {
    getByIds: (ids) => apiService.get(urls.characters.byIds(ids))
}

export {
    charactersService
}