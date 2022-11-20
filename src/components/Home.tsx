import { createUseStyles } from 'react-jss';
import { useEffect, useState } from 'react';

import Filters from './Filters/Filters';
import Sorting from './Sorting/Sorting';
import MoviesResultsLabel from './MoviesResultsLabel';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MoviesList from './MoviesList';
import { Movie } from '../shared/models/Movie.interface';
import { useFetchHttp } from '../hooks/useFetchHttp';
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
  const classes = useStyles();
  const { isLoading, data } = useFetchHttp([]);
  const [movies, setMovies] = useState<Movie[]>(data);
  const [sortBy, setSortBy] = useState<string>('releaseDate');

  const setMoviesList = (list: Movie[]) => {
    setMovies(sortMovies(list, sortBy));
  };

  const handleSortingChange = (sort: string) => {
    setSortBy(sort);
  };

  useEffect(() => {
    setMoviesList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);


  useEffect(() => {
    setMoviesList([...movies]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

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
      <ErrorBoundary componentName="MoviesList">
        {isLoading ? <div>Loading...</div> : <MoviesList movies={movies}></MoviesList>}
      </ErrorBoundary>
    </>
  );
}
