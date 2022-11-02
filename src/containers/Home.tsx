import Filters from '../components/filters/Filters';
import Sorting from '../components/sorting/Sorting';
import MoviesResultsLabel from '../components/Movies-results-label';
import { createUseStyles } from 'react-jss';
import MoviesList from '../components/Movies-list';

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
      <section className={ classes.filtersContainer }>
        <Filters/>
        <div className={ classes.sortingContainer }>
          <Sorting/>
        </div>
      </section>
      <div className={ classes.moviesResultsContainer }>
        <MoviesResultsLabel/>
      </div>
      <MoviesList/>
    </>
  );
}

export default Home;
