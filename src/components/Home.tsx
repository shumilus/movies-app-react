import { createUseStyles } from 'react-jss';
import { useEffect, useState } from 'react';

import Filters from './Filters/Filters';
import Sorting from './Sorting/Sorting';
import MoviesResultsLabel from './MoviesResultsLabel';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MoviesList from './MoviesList';
import { Movie } from '../shared/models/Movie.interface';
import { useRequestMovies } from '../hooks/useRequestMovies';
import { sortMovies } from '../shared/helpers/movies.helper';

const useStyles = createUseStyles({
  filtersContainer: {
    position: 'relative',
  },
  sortingContainer: {
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
  },
  moviesResultsContainer: {
    margin: '25px 0',
  },
});

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [sortBy, setSortBy] = useState<string>('releaseDate');
  const classes = useStyles();

  const setMoviesList = (list: Movie[]) => {
    setMovies(sortMovies(list, sortBy));
  };

  const handleSortingChange = (sort: string) => {
    setSortBy(sort);
  };

  useRequestMovies(setMoviesList, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setMoviesList([...movies]), [sortBy]);

  return (
    <>
      <section className={classes.filtersContainer}>
        <Filters/>
        <div className={classes.sortingContainer}>
          <Sorting sortingChange={handleSortingChange} sort={sortBy}/>
        </div>
      </section>
      <div className={classes.moviesResultsContainer}>
        <MoviesResultsLabel result='39'/>
      </div>
      <ErrorBoundary componentName="MoviesListContainer">
        <MoviesList movies={movies}></MoviesList>
      </ErrorBoundary>
    </>
  );
}
