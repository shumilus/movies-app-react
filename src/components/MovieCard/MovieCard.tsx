import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import MovieCardMenu from '../MovieCardMenu/MovieCardMenu';
import DeleteMovie from '../DeleteMovie';
import { Movie } from '../../shared/models/Movie.interface';
import './MovieCard.scss';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [isDeleteMovieModalOpen, setIsDeleteMovieModalOpen] = useState(false);

  const handleEditClick = () => {
    console.log(1);
  };

  const handleDeleteClick = () => {
    setIsDeleteMovieModalOpen(true);
    console.log(isDeleteMovieModalOpen);
    console.log(2);
  };

  const handleCloseClick = () => {
    console.log(3);
  };

  const handleOutsideDeleteMovieModalClick = () => {
    setIsDeleteMovieModalOpen(false);
    console.log(4);
  };

  const handleConfirmDeleteMovieModalClick = () => {
    setIsDeleteMovieModalOpen(false);
    console.log(5);
  };

  const src = `/images/movies/movie-${movie.imgUrl}.png`;

  return (
    <div className='movie-card'>
      <img className='movie-card-image'
           src={src} alt="movie-image"/>

      <div className='d-flex align-center space-between'>
        <p className='movie-card-title'>{movie.title}</p>
        <p className='movie-card-year'>{movie.year}</p>
      </div>

      <p className='movie-card-genre'>{movie.genre}</p>

      <div className='movie-card-menu__wrapper'>
        <MovieCardMenu handleEditClick={handleEditClick}
                       handleDeleteClick={handleDeleteClick}
                       handleCloseClick={handleCloseClick}/>

      </div>

      <DeleteMovie isOpen={isDeleteMovieModalOpen}
                   outsideClick={handleOutsideDeleteMovieModalClick}
                   confirmClick={handleConfirmDeleteMovieModalClick}/>
    </div>
  );
}

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
