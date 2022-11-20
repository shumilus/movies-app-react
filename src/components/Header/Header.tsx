import './Header.scss';
import Logo from '../Logo';
import MainTitle from '../MainTitle';
import Search from '../Search';
import AddMovie from '../AddMovie';
import AddMovieButton from '../AddMovieButton';
import * as React from 'react';
import { useState } from 'react';
import { Movie } from '../../shared/models/Movie.interface';
import MovieDetails from '../MovieDetails/MovieDetails';

interface HeaderProps {
  movie: Movie,
  returnToSearchClick: () => void,
}

export default function Header({ movie, returnToSearchClick }: HeaderProps) {
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
      {movie?.title
        ? <MovieDetails movie={movie} returnToSearchClick={returnToSearchClick}/>
        : <div className='app-wrapper'>
          <div className='d-flex space-between'>
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
      }

      <AddMovie isOpen={isAddMovieOpen}
                closeClick={handleAddMovieCloseClick}
                submitClick={handleAddMovieSubmitClick}></AddMovie>
    </div>
  );
}
