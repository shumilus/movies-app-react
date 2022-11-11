import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import AddMovieButton from '../AddMovieButton';
import './AddMovie.scss';
import Button from '../Button';

const textarea = {
  cols: 30,
  rows: 4,
};

export default function AddMovie() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleClose();
  };

  return (
    <div>
      <AddMovieButton title='+ add movie' handleClickAdd={handleClickOpen}/>

      <Dialog open={open} onClose={handleClose}>
        <div className='modal'>
          <a href="#" className="close-button" onClick={handleClose}></a>

          <h2 className='modal-title'>add movie</h2>
          <div>
            <div className='d-flex'>
              <div className='modal-input-container'>
                <label className='modal-input-label' htmlFor="title">title</label>
                <input className='modal-input' type="text"/>
              </div>

              <div className='modal-input-container modal-input-container-small'>
                <label className='modal-input-label' htmlFor="title">release date</label>
                <input className='modal-input' type="text"/>
              </div>
            </div>

            <div className='d-flex'>
              <div className='modal-input-container'>
                <label className='modal-input-label' htmlFor="title">movie url</label>
                <input className='modal-input' type="text"/>
              </div>

              <div className='modal-input-container modal-input-container-small'>
                <label className='modal-input-label' htmlFor="title">rating</label>
                <input className='modal-input' type="text"/>
              </div>
            </div>

            <div className='d-flex'>
              <div className='modal-input-container'>
                <label className='modal-input-label' htmlFor="title">genre</label>
                <input className='modal-input' type="text"/>
              </div>

              <div className='modal-input-container modal-input-container-small'>
                <label className='modal-input-label' htmlFor="title">runtime</label>
                <input className='modal-input' type="text"/>
              </div>
            </div>

            <div className='d-flex flex-wrap'>
              <label className='modal-input-label' htmlFor="title">overview</label>
              <textarea className='modal-overview modal-input'
                        name="overview"
                        id="overview"
                        cols={textarea.cols}
                        rows={textarea.rows}></textarea>
            </div>
          </div>
          <div className='modal-buttons-container'>
            <DialogActions>
              <Button title='reset' classes='secondary-button' handleClick={handleClose}/>
              <Button title='submit' classes='primary-button' handleClick={handleSubmit}/>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
