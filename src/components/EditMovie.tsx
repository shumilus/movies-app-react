import * as React from 'react';
import Dialog from '@mui/material/Dialog';

import MovieForm from './MovieForm/MovieForm';
import { Movie } from '../shared/models/Movie.interface';

export interface EditMovieProps {
  movie: Movie | undefined;
  isOpen: boolean;
  closeClick: () => void;
  submitClick: (movie: Movie) => void;
}

export default function EditMovie(props: EditMovieProps) {
  return (
    <Dialog open={props.isOpen} onClose={props.closeClick}>
      <MovieForm movie={props.movie}
                 title='edit movie'
                 isOpen={props.isOpen}
                 closeClick={props.closeClick}
                 submitClick={(movie: Movie) => props.submitClick({
                   ...movie,
                   id: props?.movie?.id ? props.movie.id : 0,
                 })}/>
    </Dialog>
  );
}
