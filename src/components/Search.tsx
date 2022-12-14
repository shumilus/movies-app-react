import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  inputContainer: {
    position: 'relative',
    width: '100%',
    marginRight: '15px',
    borderRadius: '4px',
  },
  input: {
    position: 'relative',
    zIndex: 2,
    background: 'transparent',
    width: '100%',
    fontSize: '20px',
    mixBlendMode: 'normal',
    borderRadius: '4px',
    fontWeight: '400',
    lineHeight: '24px',
    padding: '17px 20px',
    boxSizing: 'border-box',
  },
  inputBackground: {
    position: 'absolute',
    background: 'rgba(50, 50, 50, 0.8)',
    zIndex: 1,
    width: '100%',
    height: '100%',
    opacity: '0.7',
    borderRadius: '4px',
  },
  button: {
    padding: '17px 73px',
  },
});

function Search() {
  const classes = useStyles();

  return (
    <div className='d-flex'>
      <div className={ classes.inputContainer }>
        <div className={ classes.inputBackground }></div>
        <input type='text'
               className={ `${ classes.input } light-color` }
               placeholder='What do you want to watch?'/>
      </div>

      <button className={ `${ classes.button } primary-button` }>Search</button>
    </div>
  );
}

export default Search;
