import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';

import './MovieForm.scss';
import { Movie } from '../../shared/models/Movie.interface';
import Datepicker from '../datepicker';
import { useFormik } from 'formik';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';

export interface MovieFormProps {
  title: string
  isOpen: boolean;
  closeClick: () => void;
  submitClick: (movie: any) => void;
  movie?: Movie;
}

const textarea = {
  cols: 30,
  rows: 4,
};

export default function MovieForm(props: MovieFormProps) {
  const formik = useFormik({
    initialValues: {
      title: props.movie?.title || '',
      releaseDate: props.movie?.release_date || '',
      movieUrl: props.movie?.poster_path || '',
      rating: props.movie?.vote_average || '',
      genre: props.movie?.genres.join(', ') || '',
      runtime: props.movie?.runtime || '',
      overview: props.movie?.overview || '',
    },
    onSubmit: values => {
      return props.submitClick(values);
    },
  });

  const handleDateChange = (date: Dayjs | null) => {
    const dayjsDate = dayjs(date).toDate();
    const releaseDate = moment(dayjsDate).format('YYYY-MM-DD');
    formik.setFieldValue('releaseDate', releaseDate, true);
  };

  return (
    <div className='movie-form'>
      <button type='button' className="close-button clear-button" onClick={props.closeClick}></button>

      <h2 className='movie-form-title'>{props.title}</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='d-flex'>
          <div className='movie-form-input-container'>
            <label className='movie-form-input-label' htmlFor='title'>title</label>
            <input
              className='movie-form-input'
              type='text'
              id='title'
              name='title'
              value={formik.values.title}
              onChange={formik.handleChange}/>
          </div>

          <div className='movie-form-input-container modal-input-container-small'>
            <label className='movie-form-input-label' htmlFor='release-date'>release date</label>
            <div className='movie-form-input movie-form-date-input'>
              <Datepicker onDateChange={handleDateChange}/>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='movie-form-input-container'>
            <label className='movie-form-input-label' htmlFor='movie-url'>movie url</label>
            <input
              className='movie-form-input'
              type='text'
              id='movie-url'
              name='movieUrl'
              value={formik.values.movieUrl}
              onChange={formik.handleChange}/>
          </div>

          <div className='movie-form-input-container modal-input-container-small'>
            <label className='movie-form-input-label' htmlFor='rating'>rating</label>
            <input
              className='movie-form-input'
              type='text'
              id='rating'
              name='rating'
              value={formik.values.rating}
              onChange={formik.handleChange}/>
          </div>
        </div>

        <div className='d-flex'>
          <div className='movie-form-input-container'>
            <label className='movie-form-input-label' htmlFor='genre'>genre</label>
            <input
              className='movie-form-input'
              type='text'
              id='genre'
              name='genre'
              value={formik.values.genre}
              onChange={formik.handleChange}/>
          </div>

          <div className='movie-form-input-container modal-input-container-small'>
            <label className='movie-form-input-label' htmlFor='runtime'>runtime</label>
            <input
              className='movie-form-input'
              type='text'
              id='runtime'
              name='runtime'
              value={formik.values.runtime}
              onChange={formik.handleChange}/>
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          <label className='movie-form-input-label' htmlFor='title'>overview</label>
          <textarea className='movie-form-overview movie-form-input'
                    cols={textarea.cols}
                    rows={textarea.rows}
                    id='overview'
                    name='overview'
                    value={formik.values.overview}
                    onChange={formik.handleChange}>
          </textarea>
        </div>

        <div className='movie-form-buttons-container'>
          <DialogActions>
            <button type='button' className='secondary-button' onClick={props.closeClick}>reset</button>
            <button type='submit' className='primary-button'>submit</button>
          </DialogActions>
        </div>
      </form>
    </div>
  );
}
