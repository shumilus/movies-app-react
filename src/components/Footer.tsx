import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footer: {
    background: '#424242',
    height: '70px',
  },
});

function Footer(props: any) {
  const classes = `${useStyles().footer} flex-center`;

  return (
    <div className={ classes }>{ props.children }</div>
  );
}

export default Footer;
