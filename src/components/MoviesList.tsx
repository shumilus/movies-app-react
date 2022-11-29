import MovieCard from './MovieCard/MovieCard';
import { Movie } from '../shared/models/Movie.interface';
import React from 'react';

interface MoviesListProps {
  movies: Movie[],
  movieClick: (movie: Movie) => void,
}

const MoviesList: React.FC<MoviesListProps> = ({ movies, movieClick }: MoviesListProps) => {
  return (
    <div className='d-flex space-between flex-wrap'>
      {
        movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} movieClick={() => movieClick(movie)}/>
        ))
      }
    </div>
  );
};

export default MoviesList;
