import * as React from 'react';
import { useState } from 'react';

import MovieDetails from '../MovieDetails/MovieDetails';
import './Header.scss';
import Logo from '../Logo';
import MainTitle from '../MainTitle';
import Search from '../Search';
import AddMovie from '../AddMovie';
import AddMovieButton from '../AddMovieButton';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { convertToQueryParams } from '../../shared/utils/movie.utils';
import { Movie } from '../../shared/models/Movie.interface';
import { setSelectedMovie } from '../../store/moviesSlice';

export default function Header() {
  const dispatch = useAppDispatch();
  const [queryParams] = useSearchParams();
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
  const movie: Movie | undefined = useAppSelector(state => state.movies.selectedMovie);
  const search: string = useAppSelector(state => state.search.value);
  const navigate = useNavigate();

  const handleAddMovieClickOpen = () => {
    setIsAddMovieOpen(true);
  };

  const handleAddMovieCloseClick = () => {
    setIsAddMovieOpen(false);
  };

  const handleAddMovieSubmitClick = () => {
    setIsAddMovieOpen(false);
  };

  const handleReturnToSearchClick = () => {
    dispatch(setSelectedMovie(undefined));
  };

  const handleSearchClick = (value: string) => {
    navigate({
      pathname: '/search',
      search: convertToQueryParams(queryParams, 'title', value),
    });
  };

  return (
    <div className='header'>
      {
        movie
          ? <MovieDetails movie={movie} returnToSearchClick={handleReturnToSearchClick}/>
          : <div className='app-wrapper'>
            <div className='d-flex space-between'>
              <Logo/>
              <AddMovieButton title='+ add movie' handleClickAdd={handleAddMovieClickOpen}/>
            </div>
            <div className='title-container'>
              <MainTitle text='find your movie'/>
            </div>
            <div className='search-container'>
              <Search search={search} onSearchClick={handleSearchClick}/>
            </div>
          </div>
      }

      <AddMovie isOpen={isAddMovieOpen}
                closeClick={handleAddMovieCloseClick}
                submitClick={handleAddMovieSubmitClick}></AddMovie>
    </div>
  );
}
