import { createUseStyles } from 'react-jss';
import { useEffect } from 'react';

import Filters from './Filters/Filters';
import Sorting from './Sorting/Sorting';
import MoviesResultsLabel from './MoviesResultsLabel';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MoviesList from './MoviesList';
import { Movie } from '../shared/models/Movie.interface';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import {
  fetchMovies, requestAddMovie, requestDeleteMovie,
  setAddMovieOpen, setDeleteMovieOpen,
  setEditMovieOpen,
  setIsMovieSelected,
  setSelectedMovie,
} from '../store/moviesSlice';
import { setSorting } from '../store/sortingSlice';
import { setFilter } from '../store/filterSlice';
import AddMovie from './AddMovie';
import * as React from 'react';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

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

  const sort: string = useAppSelector(state => state.sorting.key);
  const filter: string = useAppSelector(state => state.filter.key);
  const isLoading: boolean = useAppSelector(state => state.movies.isLoading);
  const movies: Movie[] = useAppSelector(state => state.movies.list);
  const totalAmount: number = useAppSelector(state => state.movies.totalAmount);
  const isAddMovieOpen: boolean = useAppSelector(state => state.movies.isAddMovieOpen);
  const isEditMovieOpen: boolean = useAppSelector(state => state.movies.isEditMovieOpen);
  const isDeleteMovieOpen: boolean = useAppSelector(state => state.movies.isDeleteMovieOpen);
  const selectedMovie: Movie | undefined = useAppSelector(state => state.movies.selectedMovie);
  const moviesListWasChanged: { flag: boolean } = useAppSelector(state => state.movies.moviesListWasChanged);

  const handleSortingChange = (key: string) => {
    dispatch(setSorting(key));
  };

  const handleFilterChange = (key: string) => {
    dispatch(setFilter(key));
  };

  const handleMovieClick = (movie: Movie) => {
    dispatch(setSelectedMovie({ movie }));
    dispatch(setIsMovieSelected({ isSelected: true }));
  };

  const handleAddMovieCloseClick = () => {
    dispatch(setAddMovieOpen({ isOpen: false }));
  };

  const handleAddMovieSubmitClick = (movie: Movie) => {
    dispatch(requestAddMovie({ movie }));
    handleAddMovieCloseClick();
  };

  const handleEditMovieCloseClick = () => {
    dispatch(setEditMovieOpen({ isOpen: false }));
    dispatch(setSelectedMovie({ movie: undefined }));
  };

  const handleEditMovieSubmitClick = (movie: Movie) => {
    console.log(movie);
    // handleEditMovieCloseClick();
  };

  const handleOutsideDeleteMovieModalClick = () => {
    dispatch(setDeleteMovieOpen({ isOpen: false }));
    dispatch(setSelectedMovie({ movie: undefined }));
  };

  const handleConfirmDeleteMovieModalClick = () => {
    dispatch(requestDeleteMovie({ id: selectedMovie?.id }));
    handleOutsideDeleteMovieModalClick();
  };

  useEffect(() => {
    dispatch(fetchMovies({ sort, filter }));
  }, [dispatch, sort, filter, moviesListWasChanged]);

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

      <AddMovie isOpen={isAddMovieOpen}
                closeClick={handleAddMovieCloseClick}
                submitClick={handleAddMovieSubmitClick}></AddMovie>

      <EditMovie movie={selectedMovie}
                 isOpen={isEditMovieOpen}
                 closeClick={handleEditMovieCloseClick}
                 submitClick={handleEditMovieSubmitClick}/>

      <DeleteMovie isOpen={isDeleteMovieOpen}
                   onOutsideClick={handleOutsideDeleteMovieModalClick}
                   onConfirmClick={handleConfirmDeleteMovieModalClick}/>
    </>
  );
}
