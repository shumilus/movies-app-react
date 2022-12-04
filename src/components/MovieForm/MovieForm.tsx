import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';

import './MovieForm.scss';
import { Movie } from '../../shared/models/Movie.interface';
import Datepicker from '../datepicker';
import { useFormik } from 'formik';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';
import MultipleSelect from '../Select';

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

const setInitialValues = (movie: Movie | undefined) => ({
  title: movie?.title || '',
  release_date: movie?.release_date || '',
  poster_path: movie?.poster_path || '',
  vote_average: movie?.vote_average || '',
  genres: movie?.genres || '',
  runtime: movie?.runtime || '',
  overview: movie?.overview || '',
});

const validate = (values: any) => {
  const errors = {} as any;

  if (!values.title) {
    errors.title = 'Field title is required';
  }

  if (!values.release_date) {
    errors.release_date = 'Field release date is required';
  }
  if (!values.poster_path) {
    errors.poster_path = 'Field movie url is required';
  }
  if (!values.vote_average) {
    errors.vote_average = 'Field rating is required';
  }
  if (!values.genres && !values.genres.length) {
    errors.genres = 'Field genres is required';
  }
  if (!values.runtime) {
    errors.runtime = 'Field runtime is required';
  }
  if (!values.overview) {
    errors.overview = 'Field overview is required';
  }

  return errors;
};

const MovieForm: React.FC<MovieFormProps> = (props: MovieFormProps) => {
  const formik = useFormik({
    initialValues: setInitialValues(props.movie),
    onSubmit: values => props.submitClick(values),
    validate,
  });

  const handleDateChange = (date: Dayjs | null) => {
    const dayjsDate = dayjs(date).toDate();
    const releaseDate = moment(dayjsDate).format('YYYY-MM-DD');
    formik.setFieldValue('release_date', releaseDate, true);
  };

  const handleSelectChange = (genres: string[]) => {
    formik.setFieldValue('genres', genres, true);
  };

  return (
    <div className='movie-form'>
      <button type='button' className='close-button clear-button' onClick={props.closeClick}></button>

      <h2 className='movie-form-title'>{props.title}</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='d-flex'>
          <div className='movie-form-input-container'>
            <label className='movie-form-input-label' htmlFor='title'>title</label>
            <input
              className={`movie-form-input ${formik.errors.title && formik.touched.title  ? 'movie-form-input-invalid' : ''}`}
              type='text'
              id='title'
              name='title'
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
            {
              formik.errors.title && formik.touched.title
                ? <p className='movie-form-input-invalid__error'>{formik.errors.title}</p>
                : null
            }
          </div>

          <div className='movie-form-input-container movie-form-input-container-small'>
            <label className='movie-form-input-label' htmlFor='release-date'>release date</label>
            <div className={`movie-form-input movie-form-date-input ${formik.errors.release_date && formik.touched.release_date ? 'movie-form-input-invalid' : ''}`}>
              <Datepicker date={props.movie?.release_date} onDateChange={handleDateChange}/>
            </div>
            {
              formik.errors.release_date && formik.touched.release_date
                ? <p className='movie-form-input-invalid__error'>{formik.errors.release_date}</p>
                : null
            }
          </div>
        </div>

        <div className='d-flex'>
          <div className='movie-form-input-container'>
            <label className='movie-form-input-label' htmlFor='poster-path'>movie url</label>
            <input
              className={`movie-form-input ${formik.errors.poster_path && formik.touched.poster_path ? 'movie-form-input-invalid' : ''}`}
              type='text'
              id='poster-path'
              name='poster_path'
              value={formik.values.poster_path}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
            {
              formik.errors.poster_path && formik.touched.poster_path
                ? <p className='movie-form-input-invalid__error'>{formik.errors.poster_path}</p>
                : null
            }
          </div>

          <div className='movie-form-input-container movie-form-input-container-small'>
            <label className='movie-form-input-label' htmlFor='vote-average'>rating</label>
            <input
              className={`movie-form-input ${formik.errors.vote_average && formik.touched.vote_average ? 'movie-form-input-invalid' : ''}`}
              type='number'
              id='vote-average'
              name='vote_average'
              value={formik.values.vote_average}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
            {
              formik.errors.vote_average && formik.touched.vote_average
                ? <p className='movie-form-input-invalid__error'>{formik.errors.vote_average}</p>
                : null
            }
          </div>
        </div>

        <div className='d-flex'>
          <div className='movie-form-input-container'>
            <label className='movie-form-input-label' htmlFor='genres'>genres</label>
            <div className={`movie-form-input select-input ${formik.errors.genres && formik.touched.genres ? 'movie-form-input-invalid' : ''}`}>
              <MultipleSelect items={props.movie?.genres || []}
                              onSelectChange={(genres: string[]) => handleSelectChange(genres)}/>
            </div>
            {
              formik.errors.genres && formik.touched.genres
                ? <p className='movie-form-input-invalid__error'>{formik.errors.genres}</p>
                : null
            }
          </div>

          <div className='movie-form-input-container movie-form-input-container-small'>
            <label className='movie-form-input-label' htmlFor='runtime'>runtime</label>
            <input
              className={`movie-form-input ${formik.errors.runtime && formik.touched.runtime ? 'movie-form-input-invalid' : ''}`}
              type='number'
              id='runtime'
              name='runtime'
              value={formik.values.runtime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
            {
              formik.errors.runtime && formik.touched.runtime
                ? <p className='movie-form-input-invalid__error'>{formik.errors.runtime}</p>
                : null
            }
          </div>
        </div>

        <div className='d-flex flex-wrap p-relative'>
          <label className='movie-form-input-label' htmlFor='overview'>overview</label>
          <textarea className={`movie-form-input movie-form-overview ${formik.errors.overview && formik.touched.overview ? 'movie-form-overview-invalid' : ''}`}
                    cols={textarea.cols}
                    rows={textarea.rows}
                    id='overview'
                    name='overview'
                    value={formik.values.overview}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
          </textarea>
          {
            formik.errors.overview && formik.touched.overview
              ? <p className='movie-form-input-invalid__error'>{formik.errors.overview}</p>
              : null
          }
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
};

export default React.memo(MovieForm, (
  prevProps: Readonly<MovieFormProps>,
  nextProps: Readonly<MovieFormProps>,
) => prevProps?.movie?.id === nextProps?.movie?.id);
