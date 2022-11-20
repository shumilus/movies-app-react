import React, { useState } from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Main from './components/Main';
import { Movie } from './shared/models/Movie.interface';

function App() {
  const [openedMovie, setOpenedMovie] = useState<Movie>({} as Movie);

  const handleReturnToSearchClick = () => {
    setOpenedMovie({} as Movie);
  };

  return (
    <div className="App">
      <header>
        <Header movie={openedMovie} returnToSearchClick={handleReturnToSearchClick}/>
      </header>
      <main>
        <Main movieClick={(movie: Movie) => setOpenedMovie(movie)}/>
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
