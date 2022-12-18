import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterState = {
  key: string,
};

const initialState: FilterState = {
  key: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.key = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
