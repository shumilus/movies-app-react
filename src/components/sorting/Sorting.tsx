import './Sorting.scss';
import arrow from '../../assets/icons/arrow-down.svg';

function Sorting() {
  return (
    <div className='sorting'>
      <label htmlFor='sorting-dropdown' className='sorting-text sorting-label'>sort by</label>
      <div className='d-flex align-center'>
        <div id='sorting-dropdown' className='sorting-text sorting-dropdown'>release date</div>
        <img src={ arrow } alt="arrow-down"/>
      </div>
    </div>
  );
}

export default Sorting;
