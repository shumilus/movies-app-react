import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footer: {
    background: '#424242',
  },
});

function Footer(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.footer}>{ props.children }</div>
  );
}

export default Footer;
