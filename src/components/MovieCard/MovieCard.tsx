import * as React from 'react';
import PropTypes from 'prop-types';

import MovieCardMenu from '../MovieCardMenu/MovieCardMenu';
import { Movie } from '../../shared/models/Movie.interface';
import './MovieCard.scss';
import { setMoviesGenres } from '../../shared/utils/movie.utils';
import { useAppDispatch } from '../../hooks/hook';
import { setDeleteMovieOpen, setEditMovieOpen, setSelectedMovie } from '../../store/moviesSlice';

interface MovieCardProps {
  movie: Movie;
  onMovieClick: () => void,
}

function MovieCard({ movie, onMovieClick }: MovieCardProps) {
  const dispatch = useAppDispatch();

  const handleEditClick = () => {
    dispatch(setEditMovieOpen({ isOpen: true }));
    dispatch(setSelectedMovie({ movie }));
  };

  const handleDeleteClick = () => {
    dispatch(setDeleteMovieOpen({ isOpen: true }));
    dispatch(setSelectedMovie({ movie }));
  };

  return (
    <div className='movie-card'>
      <div className='movie-card-image__container'>
        <img className='movie-card-image'
             src={movie.poster_path}
             alt="movie"
             onClick={onMovieClick}
             onError={({ currentTarget }) => {
               currentTarget.onerror = null;
               currentTarget.src = '/images/default-poster.webp';
             }}/>
      </div>


      <div className='d-flex align-center space-between'>
        <p className='movie-card-title'>{movie.title}</p>
        <p className='movie-card-year'>{movie.release_date.slice(0, 4)}</p>
      </div>

      <p className='movie-card-genre'>{setMoviesGenres(movie.genres)}</p>

      <div className='movie-card-menu__wrapper'>
        <MovieCardMenu handleEditClick={handleEditClick}
                       handleDeleteClick={handleDeleteClick}/>

      </div>
    </div>
  );
}

export default React.memo(MovieCard, (
  prevProps: Readonly<MovieCardProps>,
  nextProps: Readonly<MovieCardProps>,
) => prevProps.movie.id === nextProps.movie.id);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  title: 'Movie name',
  year: 'Movie year',
  genre: 'Movie genre',
  imgUrl: '1',
};
