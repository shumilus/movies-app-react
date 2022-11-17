import { Movie } from '../models/Movie.interface';

function compare(a: string, b: string) {
  if (a == b) {
    return 0;
  }
  return a < b ? 1 : -1;
}

export const sortMovies = (movies: Movie[], key: string) => {
  return movies.sort((a: Movie, b: Movie) => compare((a as any)[key], (b as any)[key]));
};
