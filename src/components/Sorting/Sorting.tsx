import './Sorting.scss';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';


const sorting: { value: string, title: string }[] = [
  { value: 'title', title: 'Title' },
  { value: 'release_date', title: 'Release date' },
  { value: 'vote_average', title: 'Rating' },
  { value: 'genres', title: 'Genre' },
  { value: 'runtime', title: 'Runtime' },
  { value: 'overview', title: 'Overview' },
];

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

      <div className='sorting-dropdown'>
        <Select
          className='sorting-text '
          value={sort}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label', 'classes': 'sorting-text sorting-dropdown' }}
        >
          {sorting.map((i) => <MenuItem key={i.value} value={i.value}>{i.title}</MenuItem>)}
        </Select>
      </div>
    </div>
  );
}
