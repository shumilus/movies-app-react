import MovieCard from './movie-card/Movie-card';
import { Movie } from '../shared/models/Movie.interface';

interface MoviesListProps {
  movies: Movie[],
}

function MoviesList({ movies }: MoviesListProps) {
  return (
    <div className='d-flex space-between flex-wrap'>
      {
        movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id}/>
        ))
      }
    </div>
  );
}

export default MoviesList;
