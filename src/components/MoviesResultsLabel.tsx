import { createUseStyles } from 'react-jss';

interface MoviesResultsLabelProps {
  result: number;
}

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

function MoviesResultsLabel({ result }: MoviesResultsLabelProps) {
  const classes = useStyles();
  return (
    <div className={`${classes.label} light-color`}>
      <span className={classes.result}>{result}</span> <span>movies found</span>
    </div>
  );
}

export default MoviesResultsLabel;
