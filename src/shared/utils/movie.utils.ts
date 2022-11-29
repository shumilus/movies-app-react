import { MovieRequestParams } from '../../store/moviesSlice';

export const setMoviesGenres = (genres: string[]): string[] => {
  return genres.map((i: string, index: number) => `${i}${index === genres.length - 1 ? '' : ', '}`);
};

export const setMoviesRequestParams = ({ sort, filter }: MovieRequestParams): string => {
  const sortParam = `sortBy=${sort}&sortOrder=desc`;
  const filterParam = filter !== 'All' ? `filter=${filter}` : '';
  return `${sortParam}&${filterParam}`;
};
