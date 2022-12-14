import * as React from 'react';

import './Header.scss';
import Logo from '../Logo';
import MainTitle from '../MainTitle';
import Search from '../Search';
import AddMovieButton from '../AddMovieButton';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { Movie } from '../../shared/models/Movie.interface';
import { setAddMovieOpen, setIsMovieSelected, setSelectedMovie } from '../../store/moviesSlice';

export default function Header() {
  const dispatch = useAppDispatch();
  const isMovieSelected: boolean = useAppSelector(state => state.movies.isSelectedMovieOpen);
  const movie: Movie | undefined = useAppSelector(state => state.movies.selectedMovie);

  const handleAddMovieOpenClick = () => {
    dispatch(setAddMovieOpen({ isOpen: true }));
  };

  const handleReturnToSearchClick = () => {
    dispatch(setSelectedMovie({ movie: undefined }));
    dispatch(setIsMovieSelected({ isSelected: false }));
  };

  return (
    <div className='header'>
      {isMovieSelected
        ? <MovieDetails movie={movie} returnToSearchClick={handleReturnToSearchClick}/>
        : <div className='app-wrapper'>
          <div className='d-flex space-between'>
            <Logo/>
            <AddMovieButton title='+ add movie' handleClickAdd={handleAddMovieOpenClick}/>
          </div>
          <div className='title-container'>
            <MainTitle text='find your movie'/>
          </div>
          <div className='search-container'>
            <Search/>
          </div>
        </div>
      }
    </div>
  );
}
