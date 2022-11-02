import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  title: {
    fontWeight: '300',
    fontSize: '40px',
    lineHeight: '49px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
});

function MainTitle() {
  const classes = `${ useStyles().title } light-color`;

  return ( <h2 className={ classes }>find your movie</h2> );
}

export default MainTitle;
