import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import sortingReducer from './sortingSlice';
import filterReducer from './filterSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    sorting: sortingReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
