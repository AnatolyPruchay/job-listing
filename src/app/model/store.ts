import {configureStore} from '@reduxjs/toolkit';
import { positionReducer } from '../../features/JobPositions/model/positionSlice';
import { filterReducer } from '../../features/FilterPanel/model/filterSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    positions: positionReducer,
  },
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>
