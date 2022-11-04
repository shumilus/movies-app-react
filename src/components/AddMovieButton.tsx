import { createUseStyles } from 'react-jss';

interface AddMovieButtonProps {
  title: string;
}

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

function AddMovieButton({ title }: AddMovieButtonProps) {
  const classes = `${useStyles().button} transparent-button`;

  return (
    <button type='button' className={classes}>{title}</button>
  );
}

export default AddMovieButton;
