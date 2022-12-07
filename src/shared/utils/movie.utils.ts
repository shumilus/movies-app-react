import { MovieRequestParams } from '../../store/moviesSlice';

export const setMoviesGenres = (genres: string[] | undefined): string[] => {
  if (!genres) {
    return [];
  }
  return genres.map((i: string, index: number) => `${i}${index === genres.length - 1 ? '' : ', '}`);
};

export const setMoviesRequestParams = ({ sort, filter, search }: MovieRequestParams): string => {
  const sortParam = `sortBy=${sort}&sortOrder=desc`;
  const filterParam = filter !== 'All' ? `filter=${filter}` : '';
  const searchParams = search ? `search=${search}&searchBy=title` : '';
  return `${sortParam}&${filterParam}&${searchParams}`;
};
