import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SortingState = {
  key: string,
};

const initialState: SortingState = {
  key: 'release_date',
};

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSorting(state, action: PayloadAction<string>) {
      state.key = action.payload;
    },
  },
});

export const { setSorting } = sortingSlice.actions;

export default sortingSlice.reducer;
