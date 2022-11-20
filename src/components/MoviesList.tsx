import MovieCard from './MovieCard/MovieCard';
import { Movie } from '../shared/models/Movie.interface';

interface MoviesListProps {
  movies: Movie[],
  movieClick: (movie: Movie) => void,
}

function MoviesList({ movies, movieClick }: MoviesListProps) {
  return (
    <div className='d-flex space-between flex-wrap'>
      {
        movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} movieClick={() => movieClick(movie)}/>
        ))
      }
    </div>
  );
}

export default MoviesList;
