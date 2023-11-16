import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {charactersService, episodesService} from "../../services";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    chapterName: null,
    characters: [],
    errors: null,
    isLoading: null
};


const getAllEpisodes = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getEpisodeCharacters = createAsyncThunk(
    'episodesSlice/getEpisodeCharacters',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await charactersService.getByIds(ids);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setNameEpisode: (state, action) => {
            state.chapterName = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload.results;
                state.prevPage = action.payload.info.prev;
                state.nextPage = action.payload.info.next;
            })
            .addCase(getEpisodeCharacters.fulfilled, (state, action) => {
                state.characters = action.payload;
            })
            .addMatcher(isFulfilled(getAllEpisodes, getEpisodeCharacters), (state) => {
                state.errors = null;
                state.isLoading = false;
            })
            .addMatcher(isRejected(getAllEpisodes, getEpisodeCharacters), (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })
            .addMatcher(isPending(getAllEpisodes, getEpisodeCharacters), (state) => {
                state.isLoading = true;
            })

});

const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAllEpisodes,
    getEpisodeCharacters
}

export {
    episodesReducer,
    episodesActions
}