import { movies } from '../mocks/movies';
import moviesReducer, { fetchMovies, initialState } from './moviesSlice';
import { Movie } from '../shared/models/Movie.interface';

describe('moviesSlice', () => {
  const reducer = moviesReducer;

  it('should set isLoading to true, error to "" for fetchMovies.pending action', () => {
    const state = reducer(initialState, fetchMovies.pending);

    expect(state).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should set isLoading to false, isError to undefined, list to [], selectedMovie to undefined for fetchMovies.rejected action', () => {
    const state = reducer(initialState, fetchMovies.rejected);

    expect(state).toEqual({
      ...initialState,
      list: [],
      isLoading: false,
      error: undefined,
      selectedMovie: undefined,
    });
  });

  it('should set isLoading to false, error to undefined, movies to provided value for fetchMovies.fulfilled action', () => {
    const mockMovies = movies;
    const actionFulfilled = {
      type: fetchMovies.fulfilled.type, payload: {
        data: mockMovies,
        limit: 0,
        offset: 0,
        totalAmount: mockMovies.length,
      },
    };

    const state = reducer(initialState, actionFulfilled);

    expect(state).toEqual({
      ...initialState,
      isLoading: false,
      list: mockMovies,
      totalAmount: mockMovies.length,
    });
  });
});
