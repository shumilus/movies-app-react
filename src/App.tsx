import React, { useState } from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Main from './components/Main';
import { Movie } from './shared/models/Movie.interface';
import { MovieContextProvider } from './contexts/Movie.context';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie>({} as Movie);

  const handleReturnToSearchClick = () => {
    setSelectedMovie({} as Movie);
  };

  return (
    <MovieContextProvider selectedMovie={selectedMovie}>
    <div className="App">
      <header>
        <Header returnToSearchClick={handleReturnToSearchClick}/>
      </header>
      <main>
        <Main movieClick={(movie: Movie) => setSelectedMovie(movie)}/>
      </main>
      <footer>
        <Footer>
          <Logo/>
        </Footer>
      </footer>
    </div>
    </MovieContextProvider>
  );
}

export default App;
