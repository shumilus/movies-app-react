import React from 'react';

import './Filters.scss';

const filters = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

interface FiltersProps {
  filter: string;
  handleFilterChange: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ filter, handleFilterChange }: FiltersProps) => {

  const filtersItems = filters.map((filterItem: string) => {
    const classes = `filter-elem-line ${filter === filterItem ? 'selected' : ''}`;

    return (
      <li className='filter-elem' key={filterItem} onClick={() => handleFilterChange(filterItem)}>
        <p>{filterItem}</p>
        <p className={classes}></p>
      </li>
    );
  });

  return (
    <div className='filters'>
      <ul className='filters-list'>{filtersItems}</ul>
      <p className='light-line'></p>
      <p className='dark-line'></p>
    </div>
  );
};

export default Filters;
