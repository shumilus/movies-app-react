import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';

import Button from '../Button';
import './MovieForm.scss';
import { Movie } from '../../shared/models/Movie.interface';
import Datepicker from '../datepicker';

export interface MovieFormProps {
  title: string
  isOpen: boolean;
  closeClick: () => void;
  submitClick: () => void;
  movie?: Movie;
}

const textarea = {
  cols: 30,
  rows: 4,
};

export default function MovieForm(props: MovieFormProps) {
  return (
    <div className='movie-form'>
      <button className="close-button" onClick={props.closeClick}></button>

      <h2 className='movie-form-title'>{props.title}</h2>
      <div>
        <div className='d-flex'>
          <div className='movie-form-input-container'>
            <label className='movie-form-input-label' htmlFor="title">title</label>
            <input className='movie-form-input' type="text" defaultValue={props.movie?.title}/>
          </div>

          <div className='movie-form-input-container modal-input-container-small'>
            <label className='movie-form-input-label' htmlFor="title">release date</label>
            <div className='movie-form-input movie-form-date-input'>
              <Datepicker/>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='movie-form-input-container'>
            <label className='movie-form-input-label' htmlFor="title">movie url</label>
            <input className='movie-form-input' type="text" defaultValue={props.movie?.url}/>
          </div>

          <div className='movie-form-input-container modal-input-container-small'>
            <label className='movie-form-input-label' htmlFor="title">rating</label>
            <input className='movie-form-input' type="text" defaultValue={props.movie?.rating}/>
          </div>
        </div>

        <div className='d-flex'>
          <div className='movie-form-input-container'>
            <label className='movie-form-input-label' htmlFor="title">genre</label>
            <input className='movie-form-input' type="text" defaultValue={props.movie?.genre}/>
          </div>

          <div className='movie-form-input-container modal-input-container-small'>
            <label className='movie-form-input-label' htmlFor="title">runtime</label>
            <input className='movie-form-input' type="text" defaultValue={props.movie?.runtime}/>
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          <label className='movie-form-input-label' htmlFor="title">overview</label>
          <textarea className='movie-form-overview movie-form-input'
                    name="overview"
                    id="overview"
                    cols={textarea.cols}
                    rows={textarea.rows}
                    defaultValue={props.movie?.overview}></textarea>
        </div>
      </div>
      <div className='movie-form-buttons-container'>
        <DialogActions>
          <Button title='reset' classes='secondary-button' handleClick={props.closeClick}/>
          <Button title='submit' classes='primary-button' handleClick={props.submitClick}/>
        </DialogActions>
      </div>
    </div>
  );
}
