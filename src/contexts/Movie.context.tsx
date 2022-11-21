import { createContext, useContext } from 'react';

const MovieContext = createContext(null);

export const useMovieContext = () => useContext(MovieContext);

export const MovieContextProvider = ({ children, selectedMovie }: any) => {
  return <MovieContext.Provider value={selectedMovie}>{children}</MovieContext.Provider>;
};
