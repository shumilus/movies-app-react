import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './Search';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  it('should match Search snapshot', () => {
    const handleClick = jest.fn();

    const { asFragment } = render(
      <Router>
        <Search search='search' onSearchClick={handleClick}/>
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should trigger onSearchClick on button click', () => {
    const handleClick = jest.fn();

    render(<Search search='Action' onSearchClick={handleClick} />);
    userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
