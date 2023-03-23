import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/model/store';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

const filterSlice = createSlice({
  name: '@@filter',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<string>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload)
      }
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      return state.filter(item => item !== action.payload);
    },
    clearFilter: () => [],
  }
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectFilters = (state: RootState) => state.filters;