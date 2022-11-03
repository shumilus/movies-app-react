import { Movie } from '../../shared/models/Movie.interface';
import './Movie-card.scss';

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
