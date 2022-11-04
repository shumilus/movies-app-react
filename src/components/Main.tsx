import { createUseStyles } from 'react-jss';

import Home from './Home';

const useStyles = createUseStyles({
  mainContainer: {
    marginTop: '10px',
    width: '100%',
  },
});

function Main() {
  const classes = useStyles();

  return (
    <div className={ `${ classes.mainContainer } dark-background` }>
      <div className='app-wrapper'>
        <Home/>
      </div>
    </div>
  );
}

export default Main;
