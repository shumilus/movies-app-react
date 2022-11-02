import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    borderRadius: '4px',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px',
    textTransform: 'uppercase',
    padding: '11px 18px',
    boxSizing: 'border-box',
    border: 'none',
    cursor: 'pointer',
  },
});

function AddMovieButton() {
  const classes = `${ useStyles().button } transparent-button`;

  return (
    <button type='button' className={ classes }>+ add movie</button>
  );
}

export default AddMovieButton;
