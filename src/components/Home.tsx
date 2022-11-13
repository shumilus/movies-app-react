import { createUseStyles } from 'react-jss';

import Filters from './Filters/Filters';
import Sorting from './Sorting/Sorting';
import MoviesResultsLabel from './MoviesResultsLabel';
import MoviesListContainer from '../containers/MoviesListContainer';
import { useState } from 'react';

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

function Home() {
  const [ sortBy, setSortBy ] = useState<string>('releaseDate');
  const classes = useStyles();

  const handleSortingChange = (sort: string) => {
    setSortBy(sort);
  };

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
      <MoviesListContainer sorting={sortBy}/>
    </>
  );
}

export default Home;
