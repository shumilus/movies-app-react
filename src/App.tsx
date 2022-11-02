import React from 'react';

import './App.scss';

import Header from './containers/header/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Main from './containers/Main';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer>
          <Logo/>
        </Footer>
      </footer>
    </div>
  );
}

export default App;
