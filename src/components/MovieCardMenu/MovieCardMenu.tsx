import './MovieCardMenu.scss';
import * as React from 'react';
import { useState } from 'react';

interface MovieCardMenuProps {
  handleEditClick: () => void;
  handleDeleteClick: () => void;
  handleCloseClick: () => void;
}

export default function MovieCardMenu(props: MovieCardMenuProps) {
  const [isShown, setIsShown] = useState(false);

  const handleMenuOpenClick = () => {
    setIsShown(current => !current);
  };

  const handleEditClick = () => {
    handleMenuOpenClick();
    return props.handleEditClick();
  };

  const handleDeleteClick = () => {
    handleMenuOpenClick();
    return props.handleDeleteClick();
  };

  return (
    <div className='movie-card-menu__container'>
      <button className='movie-card-menu-button' onClick={handleMenuOpenClick}>
        <div className='movie-card-menu-button__dot'></div>
        <div className='movie-card-menu-button__dot'></div>
        <div className='movie-card-menu-button__dot'></div>
      </button>
      {isShown && (
        <ul className='movie-card-menu'>
          <button className='movie-card-menu__close-btn' onClick={handleMenuOpenClick}>&times;</button>

          <li className='movie-card-menu__item' onClick={() => handleEditClick()}>Edit</li>
          <li className='movie-card-menu__item' onClick={() => handleDeleteClick()}>Delete</li>
        </ul>
      )}
    </div>
  );
}
