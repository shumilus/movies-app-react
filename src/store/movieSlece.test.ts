import { movies } from '../mocks/movies';
import moviesReducer, { fetchMovies, fetchMovie, requestAddMovie, initialState } from './moviesSlice';

describe('moviesSlice', () => {
  const reducer = moviesReducer;

  it('should set isLoading to true for fetchMovies.pending action', () => {
    const state = reducer(initialState, fetchMovies.pending);

    expect(state).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should set isLoading to false, list to [], selectedMovie to undefined for fetchMovies.rejected action', () => {
    const state = reducer(initialState, fetchMovies.rejected);

    expect(state).toEqual({
      ...initialState,
      list: [],
      isLoading: false,
      error: undefined,
      selectedMovie: undefined,
    });
  });

  it('should set isLoading to false, error to undefined, list to provided value for fetchMovies.fulfilled action', () => {
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

  it('should set isLoading to true for fetchMovie.pending action', () => {
    const state = reducer(initialState, fetchMovie.pending);

    expect(state).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should set isLoading to false, list to [], openedMovie to undefined for fetchMovie.rejected action', () => {
    const state = reducer(initialState, fetchMovie.rejected);

    expect(state).toEqual({
      ...initialState,
      list: [],
      isLoading: false,
      error: undefined,
      openedMovie: undefined,
    });
  });

  it('should set isLoading to false, openedMovie to provided value for fetchMovie.fulfilled action', () => {
    const openedMovie = movies[0];
    const actionFulfilled = { type: fetchMovie.fulfilled.type, payload: openedMovie };

    const state = reducer(initialState, actionFulfilled);

    expect(state).toEqual({
      ...initialState,
      isLoading: false,
      openedMovie,
    });
  });

  it('should set isLoading to true, error to "" for requestAddMovie.pending action', () => {
    const state = reducer(initialState, requestAddMovie.pending);

    expect(state).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should set isLoading to false, error to new Error, for requestAddMovie.rejected action', () => {
    const actionFulfilled = { type: requestAddMovie.rejected.type, payload: { message: 'Server error' } };

    const state = reducer(initialState, actionFulfilled);

    expect(state).toEqual({
      ...initialState,
      isLoading: false,
      error: { message: 'Server error' },
    });
  });

  it('should set isLoading to false, moviesListWasChanged to new flag action', () => {
    const actionFulfilled = { type: requestAddMovie.fulfilled.type };

    const state = reducer(initialState, actionFulfilled);

    expect(state).toEqual({
      ...initialState,
      isLoading: false,
      moviesListWasChanged: { flag: true },
    });
  });
});
