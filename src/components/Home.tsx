import { createUseStyles } from 'react-jss';
import { useEffect } from 'react';

import Filters from './Filters/Filters';
import Sorting from './Sorting/Sorting';
import MoviesResultsLabel from './MoviesResultsLabel';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MoviesList from './MoviesList';
import { Movie } from '../shared/models/Movie.interface';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { fetchMovies, setSelectedMovie } from '../store/moviesSlice';
import { setSorting } from '../store/sortingSlice';
import { setFilter } from '../store/filterSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setSearch } from '../store/searchSlice';

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
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const sort: string = useAppSelector(state => state.sorting.key);
  const filter: string = useAppSelector(state => state.filter.key);
  const search: string = useAppSelector(state => state.search.value);
  const isLoading: boolean = useAppSelector(state => state.movies.isLoading);
  const movies: Movie[] = useAppSelector(state => state.movies.list);
  const totalAmount: number = useAppSelector(state => state.movies.totalAmount);

  const handleSortingChange = (key: string) => {
    dispatch(setSorting(key));
  };

  const handleFilterChange = (key: string) => {
    const searchParam = searchParams.get('title');
    const filterParam = searchParams.get('genre');

    navigate({
      pathname: '/search',
      search: !key || key === 'All' ? '' : `?genre=${key}`,
    });
  };

  const handleMovieClick = (movie: Movie) => {
    dispatch(setSelectedMovie({ movie, isSelected: true }));
  };

  useEffect(() => {
    const searchParam = searchParams.get('title');
    const filterParam = searchParams.get('genre');
    console.log(filterParam);

    dispatch(setSearch(searchParam || ''));
    dispatch(setFilter(filterParam || 'All'));
  }, [dispatch, searchParams]);

  useEffect(() => {
    dispatch(fetchMovies({ sort, filter, search }));
  }, [dispatch, sort, filter, search]);

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
          : <MoviesList movies={movies} onMovieClick={handleMovieClick}/>}
      </ErrorBoundary>
    </>
  );
}
