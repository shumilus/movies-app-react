import { createUseStyles } from 'react-jss';

interface MainTitleProps {
  text: string;
}

const useStyles = createUseStyles({
  title: {
    fontWeight: '300',
    fontSize: '40px',
    lineHeight: '49px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
});

function MainTitle({ text }: MainTitleProps) {
  const classes = `${useStyles().title} light-color`;

  return (<h2 className={classes}>{text}</h2>);
}

export default MainTitle;
