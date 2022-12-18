import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchState = {
  value: string,
  key: string,
};

const initialState: SearchState = {
  value: '',
  key: 'title',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
