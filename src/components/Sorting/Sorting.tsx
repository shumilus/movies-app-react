import './Sorting.scss';

function Sorting() {
  return (
    <div className='sorting'>
      <label htmlFor='sorting-dropdown' className='sorting-text sorting-label'>sort by</label>
      <div className='d-flex align-center'>
        <div id='sorting-dropdown' className='sorting-text sorting-dropdown'>release date</div>
        <img src='/icons/arrow-down.svg' alt="arrow-down"/>
      </div>
    </div>
  );
}

export default Sorting;
