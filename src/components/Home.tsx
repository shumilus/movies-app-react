import { createUseStyles } from 'react-jss';

import Filters from './Filters/Filters';
import Sorting from './Sorting/Sorting';
import MoviesResultsLabel from './MoviesResultsLabel';
import MoviesListContainer from '../containers/MoviesListContainer';

const useStyles = createUseStyles({
  filtersContainer: {
    position: 'relative',
  },
  sortingContainer: {
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '20px 10px',
  },
  moviesResultsContainer: {
    margin: '25px 0',
  },
});

function Home() {
  const classes = useStyles();

  return (
    <>
      <section className={classes.filtersContainer}>
        <Filters/>
        <div className={classes.sortingContainer}>
          <Sorting/>
        </div>
      </section>
      <div className={classes.moviesResultsContainer}>
        <MoviesResultsLabel result='39'/>
      </div>
      <MoviesListContainer/>
    </>
  );
}

export default Home;
