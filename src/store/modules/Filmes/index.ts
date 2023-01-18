import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { title } from 'process';
import { RootState } from '../..';
import {  apiGet } from '../../../services/api';
import MoviesType from './types';

const adapter = createEntityAdapter<MoviesType>({
    selectId: (state)=> state.title
})

//GET
export const getMovies = createAsyncThunk('Movies/getMovies', async () => {
    const response = await apiGet('/films/')
    return response;
})

const MoviesSlice = createSlice({
    name: 'filesMovies',
    initialState: adapter.getInitialState(), 
    reducers: {
    },
    extraReducers: (builder) => {
  
      builder.addCase(getMovies.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload.data)
      });
    }
  });

export const {selectAll : buscarFilmes} =
adapter.getSelectors((state: RootState) => state.movies)

export const MoviesReducer = MoviesSlice.reducer;