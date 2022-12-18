import { screen, render } from '@testing-library/react';
import AddMovieButton from './AddMovieButton';
import userEvent from '@testing-library/user-event';

describe('AddMovieButton', () => {
  it('should match AddMovieButton snapshot', () => {
    const { asFragment } = render(<AddMovieButton title='add movie' handleClickAdd={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should trigger onSearchClick on button click', () => {
    const handleClick = jest.fn();

    render(<AddMovieButton title='add button' handleClickAdd={handleClick} />);
    userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
