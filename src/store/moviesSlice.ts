import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from '../shared/models/Movie.interface';
import { setMoviesRequestParams } from '../shared/utils/movie.utils';

export interface MovieRequestParams {
  sort: string;
  filter: string;
  search: string;
}

interface ResponseData {
  data: Movie[],
  limit: number,
  offset: number,
  totalAmount: number,
}

type MoviesState = {
  list: Movie[],
  totalAmount: number,
  isLoading: boolean,
  error: string,
  isMovieSelected: boolean,
  selectedMovie: Movie | undefined,
};


//TODO Link for redux for async events https://www.youtube.com/watch?v=6RTbC8Acj1M
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async function (params: MovieRequestParams, { rejectWithValue }) {
    const queryParams = setMoviesRequestParams(params);

    try {
      const response = await fetch(
        `http://localhost:4000/movies?${queryParams}`,
        { method: 'GET' },
      );

      if (!response.ok) {
        throw new Error('Server Error');
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState: MoviesState = {
  list: [] as Movie[],
  totalAmount: 0,
  isLoading: false,
  error: '',
  isMovieSelected: false,
  selectedMovie: undefined,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedMovie(state, action: PayloadAction<{ movie: Movie | undefined, isSelected: boolean }>) {
      state.isMovieSelected = action.payload.isSelected;
      state.selectedMovie = action.payload.movie;
    },
  },
  extraReducers: {
    [fetchMovies.pending as any]: (state: MoviesState) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchMovies.fulfilled as any]: (state: MoviesState, action: PayloadAction<ResponseData>) => {
      state.isLoading = false;
      state.list = action.payload.data;
      state.totalAmount = action.payload.totalAmount;
    },
    [fetchMovies.rejected as any]: (state: MoviesState, action: PayloadAction<any>) => {
      state.list = [];
      state.isLoading = false;
      state.error = action.payload;
      state.isMovieSelected = false;
      state.selectedMovie = undefined;
    },
  },
});

export const { setSelectedMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
