import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import MoviesList from '../components/MoviesList';
import { useState } from 'react';
import { useRequestMovies } from '../hooks/useRequestMovies';
import { Movie } from '../shared/models/Movie.interface';


export default function MoviesListContainer() {
  const [ movies, setMovies ] = useState<Movie[]>([]);

  const setMoviesList = (movieList: Movie[]) => {
    // TODO Why this method execute twice?
    console.log(movieList);
    setMovies(movieList);
  };

  useRequestMovies(setMoviesList, []);

  return (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={movies}></MoviesList>
    </ErrorBoundary>
  );
}
