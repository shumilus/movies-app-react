import { createUseStyles } from 'react-jss';
import { useEffect } from 'react';

import Filters from './Filters/Filters';
import Sorting from './Sorting/Sorting';
import MoviesResultsLabel from './MoviesResultsLabel';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MoviesList from './MoviesList';
import { Movie } from '../shared/models/Movie.interface';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { fetchMovies } from '../store/moviesSlice';
import { setSorting } from '../store/sortingSlice';
import { setFilter } from '../store/filterSlice';

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

export default function Home({ movieClick }: any) {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const sort: string = useAppSelector(state => state.sorting.key);
  const filter: string = useAppSelector(state => state.filter.key);
  const isLoading: boolean = useAppSelector(state => state.movies.isLoading);
  const movies: Movie[] = useAppSelector(state => state.movies.list);
  const totalAmount: number = useAppSelector(state => state.movies.totalAmount);

  const handleSortingChange = (key: string) => {
    dispatch(setSorting(key));
  };

  const handleFilterChange = (key: string) => {
    dispatch(setFilter(key));
  };

  useEffect(() => {
    dispatch(fetchMovies({ sort, filter }));
  }, [dispatch, sort, filter]);

  return (
    <>
      <section className={classes.filtersContainer}>
        <Filters filter={filter} handleFilterChange={handleFilterChange}/>

        <div className={classes.sortingContainer}>
          <Sorting sortingChange={handleSortingChange} sort={sort}/>
        </div>
      </section>
      <div className={classes.moviesResultsContainer}>
        <MoviesResultsLabel result={totalAmount}/>
      </div>
      <ErrorBoundary componentName="MoviesList">
        {isLoading
          ? <div>Loading...</div>
          : <MoviesList movies={movies} movieClick={(movie) => movieClick(movie)}></MoviesList>}
      </ErrorBoundary>
    </>
  );
}
