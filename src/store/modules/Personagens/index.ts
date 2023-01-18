import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../..';
import {  apiGet } from '../../../services/api';
import type {Personagem} from './types';

 const adapter = createEntityAdapter<Personagem>({
   selectId: (state) =>state.name
})

//GET
export const getPersonagens = createAsyncThunk('Personagens/getPersonagens', async () => {
  const response = await apiGet('/people/')
  return response;
})


const PersonagensSlice = createSlice({
  name: 'FilesPersonagens',
  initialState: adapter.getInitialState(), 
  reducers: {
  },
  extraReducers: (builder) => {

    builder.addCase(getPersonagens.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload.data)
    });
  }
});


export const {selectAll : buscarPersonagens} =
adapter.getSelectors((state : RootState) => state.personagens)

export const PersonagensReducer = PersonagensSlice.reducer;
