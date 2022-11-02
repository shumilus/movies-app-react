import React from 'react';

import './App.scss';

import Header from './containers/header/Header';
import Home from './containers/Home';
import Footer from './components/Footer';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Home/>
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
