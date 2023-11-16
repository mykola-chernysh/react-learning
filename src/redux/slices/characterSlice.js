import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {charactersService} from "../../services";

const initialState = {
    characters: [],
    errors: null,
    isLoading: null
};

const getCharacters = createAsyncThunk(
    'charactersSlice/getCharacters',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await charactersService.getByIds(ids);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.characters = action.payload;
                state.errors = null;
                state.isLoading = false;
            })
            .addCase(getCharacters.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })
            .addCase(getCharacters.pending, (state) => {
                state.isLoading = true;
            })
});

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions,
    getCharacters
}

export {
    charactersReducer,
    charactersActions
}