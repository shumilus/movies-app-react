import { Movie } from '../../shared/models/Movie.interface';
import './MovieCard.scss';
import PropTypes from 'prop-types';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const src = `/images/movies/movie-${movie.imgUrl}.png`;

  return (
    <div className='movie-card'>
      <img src={src} alt="movie-image"/>

      <div className='d-flex align-center space-between'>
        <p className='movie-card-title'>{movie.title}</p>
        <p className='movie-card-year'>{movie.year}</p>
      </div>

      <p className='movie-card-genre'>{movie.genre}</p>
    </div>
  );
}

export default MovieCard;

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
