import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteMovie from './DeleteMovie';

describe('DeleteMovie', () => {
  it('should match DeleteMovie snapshot', () => {
    const { asFragment } = render(<DeleteMovie isOpen={true} onOutsideClick={() => {}} onConfirmClick={() => {}}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should trigger handleConfirmClick on confirm button click', () => {
    const handleConfirmClick = jest.fn();
    const handleOutsideClick = jest.fn();

    render(<DeleteMovie isOpen={true} onConfirmClick={handleConfirmClick} onOutsideClick={handleOutsideClick}/>);
    userEvent.click(screen.getByRole('button', { name: /confirm-btn/i }));

    expect(handleConfirmClick).toHaveBeenCalledTimes(1);
  });

  it('should trigger handleOutsideClick on close button click', () => {
    const handleConfirmClick = jest.fn();
    const handleOutsideClick = jest.fn();

    render(<DeleteMovie isOpen={true} onConfirmClick={handleConfirmClick} onOutsideClick={handleOutsideClick}/>);
    userEvent.click(screen.getByRole('button', { name: /close-btn/i }));

    expect(handleOutsideClick).toHaveBeenCalledTimes(1);
  });
});
