import { createUseStyles } from 'react-jss';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';

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
        <Routes>
          <Route path='/' element={<Navigate to='/search'/>} />
          <Route path='/search' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  );
}
