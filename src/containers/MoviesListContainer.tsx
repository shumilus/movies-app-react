import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import MoviesList from '../components/MoviesList';
import { movies } from '../mocks/movies';


export default function MoviesListContainer() {
  return (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={movies}></MoviesList>
    </ErrorBoundary>
  );
}
