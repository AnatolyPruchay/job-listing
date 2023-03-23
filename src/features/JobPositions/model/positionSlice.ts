import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/model/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IJobPosition } from '../types';

const initialState: IJobPosition[] = [];

const positionSlice = createSlice({
  name: '@@position',
  initialState,
  reducers: {
    addPositions: (_, action: PayloadAction<IJobPosition[]>) => action.payload,
  },
});

export const { addPositions } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;

export const selectVisiblePositions = (state: RootState, filters: string[] = []) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter(pos => {
    const posFilters: string[] = [pos.role, pos.level, ...pos.languages, ...pos.tools];

    return filters.every(filter => posFilters.includes(filter))
  })
}