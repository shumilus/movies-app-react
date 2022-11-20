import './Header.scss';
import Logo from '../Logo';
import MainTitle from '../MainTitle';
import Search from '../Search';
import AddMovie from '../AddMovie';
import AddMovieButton from '../AddMovieButton';
import * as React from 'react';
import { useState } from 'react';

function Header() {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

  const handleAddMovieClickOpen = () => {
    setIsAddMovieOpen(true);
  };

  const handleAddMovieCloseClick = () => {
    setIsAddMovieOpen(false);
  };

  const handleAddMovieSubmitClick = () => {
    setIsAddMovieOpen(false);
  };

  return (
    <div className='header'>
      <div className='app-wrapper'>
        <div className='d-flex space-between align-center'>
          <Logo/>
          <AddMovieButton title='+ add movie' handleClickAdd={handleAddMovieClickOpen}/>
        </div>
        <div className='title-container'>
          <MainTitle text='find your movie'/>
        </div>
        <div className='search-container'>
          <Search/>
        </div>
      </div>

      <AddMovie isOpen={isAddMovieOpen}
                closeClick={handleAddMovieCloseClick}
                submitClick={handleAddMovieSubmitClick}></AddMovie>
    </div>
  );
}

export default Header;
