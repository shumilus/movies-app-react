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

export const convertToQueryParams = (currentParams: URLSearchParams, paramKey: string, paramValue: string): string => {
  if (!currentParams.toString() && !paramValue) {
    return '';
  }

  let paramsArray: any[] = [];

  currentParams.forEach((value: string, key: string) => {
    paramsArray = [
      ...paramsArray,
      { key, value: key === paramKey ? paramValue : value },
    ];
  });

  const isAlreadyExist = paramsArray.some(i => i.key === paramKey);
  const params = isAlreadyExist ? paramsArray : [...paramsArray, { key: paramKey, value: paramValue }];

  const filteredArray = params.filter((i) => i.key !== paramKey || (i.key === paramKey && paramValue));

  return `?${filteredArray.map(i => `${i.key}=${i.value}`).join('&')}`;
};
