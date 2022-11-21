import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import MovieCardMenu from '../MovieCardMenu/MovieCardMenu';
import DeleteMovie from '../DeleteMovie';
import { Movie } from '../../shared/models/Movie.interface';
import './MovieCard.scss';
import EditMovie from '../EditMovie';

interface MovieCardProps {
  movie: Movie;
  movieClick: () => void,
}

function MovieCard({ movie, movieClick }: MovieCardProps) {
  const [isDeleteMovieModalOpen, setIsDeleteMovieModalOpen] = useState(false);
  const [isEditMovieOpen, setIsEditMovieOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditMovieOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteMovieModalOpen(true);
  };

  const handleCloseClick = () => {
    console.log(3);
  };

  const handleOutsideDeleteMovieModalClick = () => {
    setIsDeleteMovieModalOpen(false);
  };

  const handleConfirmDeleteMovieModalClick = () => {
    setIsDeleteMovieModalOpen(false);
  };

  const handleEditMovieCloseClick = () => {
    setIsEditMovieOpen(false);
  };

  const handleEditMovieSubmitClick = () => {
    setIsEditMovieOpen(false);
  };

  return (
    <div className='movie-card'>
      <img className='movie-card-image'
           src={movie.url} alt="movie" onClick={movieClick}/>

      <div className='d-flex align-center space-between'>
        <p className='movie-card-title'>{movie.title}</p>
        <p className='movie-card-year'>{movie.releaseDate}</p>
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

      <EditMovie movie={movie}
                 isOpen={isEditMovieOpen}
                 closeClick={handleEditMovieCloseClick}
                 submitClick={handleEditMovieSubmitClick}/>
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
