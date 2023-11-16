import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {episodesService} from "../../services";

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
                state.errors = null;
                state.isLoading = false;
            })
            .addCase(getAllEpisodes.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllEpisodes.pending, (state) => {
                state.isLoading = true;
            })

});

const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAllEpisodes
}

export {
    episodesReducer,
    episodesActions
}