import React from 'react';
import './App.scss';
import Header from './containers/Header';
import Home from './containers/Home';
import Footer from './components/Footer';

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
          <span>Footer</span>
        </Footer>
      </footer>
    </div>
  );
}

export default App;
