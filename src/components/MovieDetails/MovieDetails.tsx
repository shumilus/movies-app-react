import * as React from 'react';

import Logo from '../Logo';
import './MovieDetails.scss';
import { Movie } from '../../shared/models/Movie.interface';
import { setMoviesGenres } from '../../shared/utils/movie.utils';

interface MovieDetailsProps {
  movie: Movie,
  returnToSearchClick: () => void,
}

export default function MovieDetails({ movie, returnToSearchClick }: MovieDetailsProps) {
  return (
    <div className='movie-details'>
      <div className='app-wrapper'>
        <div className='d-flex space-between'>
          <Logo/>
          <button className='clear-button' onClick={returnToSearchClick}>
            <img src='/icons/search-icon.svg' alt='search'/>
          </button>
        </div>

        <div className='d-flex'>
          <img className='movie-details-image'
               src={movie.poster_path}
               alt="movie"
               onError={({ currentTarget }) => {
                 currentTarget.onerror = null;
                 currentTarget.src = '/images/default-poster.webp';
               }}/>

          <div className='movie-details-content'>
            <div className='d-flex'>
              <h2 className='movie-details-title'>{movie.title}</h2>
              <div className='movie-details-rating'>{movie.vote_average}</div>
            </div>
            <p className='movie-details-genre'>{setMoviesGenres(movie.genres)}</p>

            <div>
              <span className='movie-details-year red-color'>{movie.release_date.slice(0, 4)}</span>
              <span className='movie-details-runtime red-color'>{movie.runtime}</span>
            </div>
            <p className='movie-details-description'>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
