import { createUseStyles } from 'react-jss';
import { useEffect } from 'react';

import Filters from './Filters/Filters';
import Sorting from './Sorting/Sorting';
import MoviesResultsLabel from './MoviesResultsLabel';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MoviesList from './MoviesList';
import { Movie } from '../shared/models/Movie.interface';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { fetchMovie, fetchMovies } from '../store/moviesSlice';
import { setSorting } from '../store/sortingSlice';
import { setFilter } from '../store/filterSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setSearch } from '../store/searchSlice';
import { convertToQueryParams } from '../shared/utils/movie.utils';

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

function setNavigateValue(queryParams: URLSearchParams, paramKey: string, paramValue: string): any {
  return {
    pathname: '/search',
    search: convertToQueryParams(queryParams, paramKey, paramValue),
  };
}

export default function Home() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [queryParams] = useSearchParams();
  const navigate = useNavigate();

  const sort: string = useAppSelector(state => state.sorting.key);
  const filter: string = useAppSelector(state => state.filter.key);
  const search: string = useAppSelector(state => state.search.value);
  const isLoading: boolean = useAppSelector(state => state.movies.isLoading);
  const movies: Movie[] = useAppSelector(state => state.movies.list);
  const totalAmount: number = useAppSelector(state => state.movies.totalAmount);

  const handleSortingChange = (key: string) => {
    navigate(setNavigateValue(queryParams, 'sortBy', key));
  };

  const handleFilterChange = (key: string) => {
    const filterKey = (key && key !== 'All') ? key : '';

    navigate(setNavigateValue(queryParams, 'genre', filterKey));
  };

  const handleMovieClick = (id: number) => {
    navigate(setNavigateValue(queryParams, 'movie', String(id)));
  };

  useEffect(() => {
    const searchParams = queryParams.get('title');
    const filterParams = queryParams.get('genre');
    const sortParams = queryParams.get('sortBy');
    const movieParams = queryParams.get('movie');

    dispatch(setSearch(searchParams || ''));
    dispatch(setFilter(filterParams || 'All'));
    dispatch(setSorting(sortParams || 'release_date'));
    dispatch(fetchMovie({ id: Number(movieParams) || 0 }));
  }, [dispatch, queryParams]);

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
        {
          isLoading
            ? <div>Loading...</div>
            : <MoviesList movies={movies} onMovieClick={handleMovieClick}/>
        }
      </ErrorBoundary>
    </>
  );
}
