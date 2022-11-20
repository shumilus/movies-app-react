import { createUseStyles } from 'react-jss';

import Home from './Home';
import { Movie } from '../shared/models/Movie.interface';

const useStyles = createUseStyles({
  mainContainer: {
    marginTop: '10px',
    width: '100%',
  },
});

export default function Main( { movieClick }: any) {
  const classes = useStyles();

  return (
    <div className={ `${ classes.mainContainer } dark-background` }>
      <div className='app-wrapper'>
        <Home movieClick={(movie: Movie) => movieClick(movie)}/>
      </div>
    </div>
  );
}
