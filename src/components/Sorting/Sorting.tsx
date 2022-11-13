import './Sorting.scss';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

export interface SortingProps {
  sortingChange: (sorting: string) => void;
  sort: string;
}

export default function Sorting({ sortingChange, sort }: SortingProps) {
  const handleChange = (event: SelectChangeEvent) => {
    return sortingChange(event.target.value);
  };

  return (
    <div className='sorting'>
      <label htmlFor='sorting-dropdown' className='sorting-text sorting-label'>sort by</label>

      <Select
        className='sorting-text sorting-dropdown'
        value={sort}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label', 'classes' : 'sorting-text sorting-dropdown' }}
      >
        <MenuItem className='test' value={'title'}>Title</MenuItem>
        <MenuItem value={'releaseDate'}>Release date</MenuItem>
        <MenuItem value={'rating'}>Rating</MenuItem>
        <MenuItem value={'genre'}>Genre</MenuItem>
        <MenuItem value={'runtime'}>Runtime</MenuItem>
        <MenuItem value={'overview'}>Overview</MenuItem>
      </Select>
    </div>
  );
}
