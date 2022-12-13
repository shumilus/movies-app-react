import MovieCard from './MovieCard/MovieCard';
import { Movie } from '../shared/models/Movie.interface';
import React from 'react';

interface MoviesListProps {
  movies: Movie[],
  onMovieClick: (id: number) => void,
}

const MoviesList: React.FC<MoviesListProps> = ({ movies, onMovieClick }: MoviesListProps) => {
  return (
    <div className='d-flex space-between flex-wrap'>
      {
        movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} onMovieClick={() => onMovieClick(movie.id)}/>
        ))
      }
    </div>
  );
};

export default MoviesList;
