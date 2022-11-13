import { useEffect } from 'react';
import { moviesMock } from '../mocks/movies';
import { Movie } from '../shared/models/Movie.interface';

export const useRequestMovies = (callbackFn: (movieList: Movie[]) => void, dependencies: any[]) => {
  useEffect(() => {
    new Promise(() => {
      setTimeout(() => {
        callbackFn(moviesMock);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
};
