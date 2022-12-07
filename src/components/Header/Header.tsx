import './Header.scss';
import Logo from '../Logo';
import MainTitle from '../MainTitle';
import Search from '../Search';
import AddMovie from '../AddMovie';
import AddMovieButton from '../AddMovieButton';
import * as React from 'react';
import { useState } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { Movie } from '../../shared/models/Movie.interface';
import { setSelectedMovie } from '../../store/moviesSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Header() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
  const isMovieSelected: boolean = useAppSelector(state => state.movies.isMovieSelected);
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
    dispatch(setSelectedMovie({ movie: undefined, isSelected: false }));
  };

  const handleSearchClick = (value: string) => {
    const searchParam = searchParams.get('title');
    const filterParam = searchParams.get('genre');

    navigate({
      pathname: '/search',
      search: value ? `?title=${value}` : '',
    });
  };

  return (
    <div className='header'>
      {isMovieSelected
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
