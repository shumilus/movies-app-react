import { createUseStyles } from 'react-jss';
import logo from '../assets/icons/logo.svg';

const useStyles = createUseStyles({
  icon: {
    width: '150px',
    height: '24px',
    cursor: 'pointer',
  },
});

function Logo() {
  const classes = useStyles();

  return (<img className={classes.icon} src={ logo } alt='logo'/>);
}

export default Logo;
