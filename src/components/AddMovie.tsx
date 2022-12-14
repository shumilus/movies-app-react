import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import MovieForm from './MovieForm/MovieForm';
import { Movie } from '../shared/models/Movie.interface';

export interface AddMovieProps {
  isOpen: boolean;
  closeClick: () => void;
  submitClick: (movie: Movie) => void;
}

export default function AddMovie(props: AddMovieProps) {
  return (
    <div>
      <Dialog open={props.isOpen} onClose={props.closeClick}>
        <MovieForm title='add movie'
                   isOpen={props.isOpen}
                   closeClick={props.closeClick}
                   submitClick={(movie) => props.submitClick(movie)}/>
      </Dialog>
    </div>
  );
}
