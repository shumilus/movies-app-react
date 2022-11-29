import { createUseStyles } from 'react-jss';

import Home from './Home';

const useStyles = createUseStyles({
  mainContainer: {
    marginTop: '10px',
    width: '100%',
  },
});

export default function Main() {
  const classes = useStyles();

  return (
    <div className={ `${ classes.mainContainer } dark-background` }>
      <div className='app-wrapper'>
        <Home/>
      </div>
    </div>
  );
}
