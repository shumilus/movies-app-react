import { createUseStyles } from 'react-jss';

import Filters from './Filters/Filters';
import Sorting from './Sorting/Sorting';
import MoviesResultsLabel from './MoviesResultsLabel';
import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MoviesList from './MoviesList';
import { Movie } from '../shared/models/Movie.interface';
import { useRequestMovies } from '../hooks/useRequestMovies';

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

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [sortBy, setSortBy] = useState<string>('releaseDate');
  const classes = useStyles();

  const setMoviesList = (movieList: Movie[]) => {
    const sortedList = sortMovies(movieList, sortBy);
    setMovies(sortedList);
  };

  const handleSortingChange = (sort: string) => {
    console.log(sort);
    console.log(sortBy);
    setSortBy(sort);
    console.log(sortBy);
    setMoviesList(movies);
  };

  useRequestMovies(setMoviesList, []);

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
