import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  label: {
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
  },
  result: {
    fontWeight: '600',
  },
});

function MoviesResultsLabel() {
  const classes = useStyles();
  return (
    <div className={`${classes.label} light-color`}>
    <span className={classes.result}>39</span> <span>movies found</span></div>
  );
}

export default MoviesResultsLabel;
