import { createUseStyles } from 'react-jss';

import Home from './Home';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import Logo from './Logo';

const useStyles = createUseStyles({
  mainContainer: {
    marginTop: '10px',
    width: '100%',
  },
});

export default function Main() {
  const classes = useStyles();

  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <div className={ `${ classes.mainContainer } dark-background` }>
          <div className='app-wrapper'>
            <Home/>
          </div>
        </div>
      </main>
      <footer>
        <Footer>
          <Logo/>
        </Footer>
      </footer>
    </div>
  );
}
