import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { createUseStyles } from 'react-jss';
import Button from './Button';

interface MovieCardMenuProps {
  isOpen: boolean;
  onOutsideClick: () => void;
  onConfirmClick: () => void;
}

const useStyles = createUseStyles({
  content: {
    padding: '60px 80px',
    color: '#FFFFFF',
  },
  title: {
    fontWeight: '300',
    fontSize: '40px',
    lineHeight: '49px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginTop: '0',
  },
  subTitle: {
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
    marginBottom: '50px',
  },
});

export default function DeleteMovie({  isOpen, onOutsideClick, onConfirmClick }: MovieCardMenuProps) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onOutsideClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <button className="close-button clear-button" onClick={onOutsideClick}></button>

      <div className={classes.content}>
        <h2 className={classes.title}>delete movie</h2>
        <p className={classes.subTitle}>Are you sure you want to delete this movie?</p>

          <DialogActions>
            <Button classes='primary-button' title='confirm' handleClick={onConfirmClick}></Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
