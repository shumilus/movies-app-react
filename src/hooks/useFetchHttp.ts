import { useEffect, useState } from 'react';
import { moviesMock } from '../mocks/movies';
import { Movie } from '../shared/models/Movie.interface';

export interface FetchHttp {
  isLoading: boolean,
  data: any[],
}

export const useFetchHttp = (dependencies: any[]): FetchHttp => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    setIsLoading(true);

    // TODO will be implemented in next modules
    // fetch(url)
    //   .then((response: any) => {
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch!');
    //     }
    //     return response.json();
    //   })
    //   .then(() => {
    //     setIsLoading(false);
    //     setData(moviesMock);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setIsLoading(false);
    //   });

    new Promise(() => {
      setTimeout(() => {
        setIsLoading(false);
        setData(moviesMock);
      }, 2000);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { isLoading, data };
};
