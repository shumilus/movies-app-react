import React from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Main from './components/Main';

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
