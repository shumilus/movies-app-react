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
  selectedMovie: Movie | undefined,
  isSelectedMovieOpen: boolean,
  isAddMovieOpen: boolean,
  isEditMovieOpen: boolean,
  isDeleteMovieOpen: boolean,
  moviesListWasChanged: { flag: boolean },
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

export const requestAddMovie = createAsyncThunk(
  'movies/requestAddMovie',
  async function (params: { movie: Movie }, { rejectWithValue }) {
    try {
      const response = await fetch(
        'http://localhost:4000/movies',
        {
          method: 'POST',
          body: JSON.stringify(params.movie),
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
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

export const requestEditMovie = createAsyncThunk(
  'movies/requestEditMovie',
  async function (params: { movie: Movie }, { rejectWithValue }) {
    try {
      const response = await fetch(
        'http://localhost:4000/movies',
        {
          method: 'PUT',
          body: JSON.stringify(params.movie),
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
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

export const requestDeleteMovie = createAsyncThunk(
  'movies/requestDeleteMovie',
  async function (params: { id: number | undefined }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `http://localhost:4000/movies/${params.id}`,
        {
          method: 'DELETE',
        },
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

export const fetchMovie = createAsyncThunk(
  'movies/fetchMovie',
  async function (params: { id: number }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `http://localhost:4000/movies/${params.id}`,
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
  selectedMovie: undefined,
  isSelectedMovieOpen: false,
  isAddMovieOpen: false,
  isEditMovieOpen: false,
  isDeleteMovieOpen: false,
  moviesListWasChanged: { flag: false },
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedMovie(state, action: PayloadAction<Movie | undefined>) {
      state.selectedMovie = action.payload;
    },
    setIsMovieSelected(state, action: PayloadAction<{ isSelected: boolean }>) {
      state.isSelectedMovieOpen = action.payload.isSelected;
    },
    setAddMovieOpen(state, action: PayloadAction<{ isOpen: boolean }>) {
      state.isAddMovieOpen = action.payload.isOpen;
    },
    setEditMovieOpen(state, action: PayloadAction<{ isOpen: boolean }>) {
      state.isEditMovieOpen = action.payload.isOpen;
    },
    setDeleteMovieOpen(state, action: PayloadAction<{ isOpen: boolean }>) {
      state.isDeleteMovieOpen = action.payload.isOpen;
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
      state.selectedMovie = undefined;
    },
    [fetchMovie.pending as any]: (state: MoviesState) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchMovie.fulfilled as any]: (state: MoviesState, action: PayloadAction<Movie>) => {
      state.isLoading = false;
      state.selectedMovie = action.payload;
    },
    [fetchMovie.rejected as any]: (state: MoviesState, action: PayloadAction<any>) => {
      state.list = [];
      state.isLoading = false;
      state.error = action.payload;
      state.selectedMovie = undefined;
      state.selectedMovie = undefined;
    },

    [requestAddMovie.pending as any]: (state: MoviesState) => {
      state.isLoading = true;
      state.error = '';
    },
    [requestAddMovie.fulfilled as any]: (state: MoviesState) => {
      state.isLoading = false;
      state.moviesListWasChanged = { flag: true };
    },
    [requestAddMovie.rejected as any]: (state: MoviesState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [requestEditMovie.pending as any]: (state: MoviesState) => {
      state.isLoading = true;
      state.error = '';
    },
    [requestEditMovie.fulfilled as any]: (state: MoviesState) => {
      state.isLoading = false;
      state.moviesListWasChanged = { flag: true };
    },
    [requestEditMovie.rejected as any]: (state: MoviesState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [requestDeleteMovie.pending as any]: (state: MoviesState) => {
      state.isLoading = true;
      state.error = '';
    },
    [requestDeleteMovie.fulfilled as any]: (state: MoviesState) => {
      state.isLoading = false;
      state.moviesListWasChanged = { flag: true };
    },
    [requestDeleteMovie.rejected as any]: (state: MoviesState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.moviesListWasChanged = { flag: true };
    },
  },
});

export const {
  setSelectedMovie,
  setIsMovieSelected,
  setAddMovieOpen,
  setEditMovieOpen,
  setDeleteMovieOpen,
} = moviesSlice.actions;

export default moviesSlice.reducer;
