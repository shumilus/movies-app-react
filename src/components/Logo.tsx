import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  icon: {
    width: '150px',
    height: '24px',
    cursor: 'pointer',
  },
});

function Logo() {
  const classes = useStyles();

  return (<img className={classes.icon} src='/icons/logo.svg' alt='logo'/>);
}

export default Logo;
