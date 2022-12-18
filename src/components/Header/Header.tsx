import * as React from 'react';

import MovieDetails from '../MovieDetails/MovieDetails';
import './Header.scss';
import Logo from '../Logo';
import MainTitle from '../MainTitle';
import Search from '../Search';
import AddMovieButton from '../AddMovieButton/AddMovieButton';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { convertToQueryParams } from '../../shared/utils/movie.utils';
import { Movie } from '../../shared/models/Movie.interface';
import { setAddMovieOpen, setOpenedMovie } from '../../store/moviesSlice';

function setNavigateValue(queryParams: URLSearchParams, paramKey: string, paramValue: string): any {
  return {
    pathname: '/search',
    search: convertToQueryParams(queryParams, paramKey, paramValue),
  };
}

export default function Header() {
  const dispatch = useAppDispatch();
  const [queryParams] = useSearchParams();
  const movie: Movie | undefined = useAppSelector(state => state.movies.openedMovie);
  const search: string = useAppSelector(state => state.search.value);
  const navigate = useNavigate();

  const handleAddMovieOpenClick = () => {
    dispatch(setAddMovieOpen({ isOpen: true }));
  };

  const handleReturnToSearchClick = () => {
    navigate(setNavigateValue(queryParams, 'movie', ''));
    dispatch(setOpenedMovie(undefined));
  };

  const handleSearchClick = (value: string) => {
    navigate(setNavigateValue(queryParams, 'title', value));
  };

  return (
    <div className='header'>
      {
        movie
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
              <Search search={search} onSearchClick={handleSearchClick}/>
            </div>
          </div>
      }
    </div>
  );
}
