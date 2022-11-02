import './Filters.scss';

const filters = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const filtersItems = filters.map((filter, index) => {
  const classes = `filter-elem-line ${index === 0 ? 'selected' : ''}`;

  return (
    <li className='filter-elem' key={ filter }>
      <p>{ filter }</p>
      <p className={ classes }></p>
    </li>
  );
});

function Filters() {
  return (
    <div className='filters'>
      <ul className='filters-list'>{ filtersItems }</ul>
      <p className='light-line'></p>
      <p className='dark-line'></p>
    </div>
  );
}

export default Filters;
