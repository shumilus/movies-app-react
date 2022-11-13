import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import MoviesList from '../components/MoviesList';
import { useState } from 'react';
import { useRequestMovies } from '../hooks/useRequestMovies';
import { Movie } from '../shared/models/Movie.interface';
import { useSortingChane } from '../hooks/useSoertingChange';

function compare(a: Movie, b: Movie, key: string) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (a[key] < b[key]) {
    return -1;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

function sortMovies(movies: Movie[], sorting: string) {
  return movies.sort((a: Movie, b: Movie) => compare(a, b, sorting));
}

export interface MoviesListContainerProps {
  sorting: string;
}

export default function MoviesListContainer(props: MoviesListContainerProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  const setMoviesList = (movieList: Movie[]) => {
    // TODO Why this method execute twice?
    console.log(movieList);
    setMovies(sortMovies(movieList, props.sorting));
  };

  const sortingChange = () => {
    setMovies(sortMovies(movies, props.sorting));
  };

  useRequestMovies(setMoviesList, []);

  useSortingChane(sortingChange, [props.sorting]);

  return (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={movies}></MoviesList>
    </ErrorBoundary>
  );
}
