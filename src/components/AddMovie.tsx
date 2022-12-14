import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import MovieForm from './MovieForm/MovieForm';

export interface AddMovieProps {
  isOpen: boolean;
  closeClick: () => void;
  submitClick: () => void;
}

export default function AddMovie(props: AddMovieProps) {
  return (
    <Dialog open={props.isOpen} onClose={props.closeClick}>
      <MovieForm title='add movie'
                 isOpen={props.isOpen}
                 closeClick={props.closeClick}
                 submitClick={props.submitClick}/>
    </Dialog>
  );
}
