import PropTypes from 'prop-types';

interface ButtonProps {
  title: string;
  classes: string;
  handleClick: () => void;
}

export default function Button({ title, classes, handleClick }: ButtonProps) {
  return (
    <button type='button' className={classes} onClick={handleClick}>{title}</button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  title: 'Button title',
  classes: 'Movie year',
  handleClick: () => {},
};
