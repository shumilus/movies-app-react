import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

interface MultipleSelectProps {
  onSelectChange: (value: string[]) => void;
  items: string[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Comedy',
  'Drama',
  'Romance',
  'Fantasy',
  'War',
  'Action',
  'Mystery',
  'Thriller',
  'Animation',
  'Science Fiction',
  'Adventure',
];

export default function MultipleSelect({ items, onSelectChange }: MultipleSelectProps) {
  const [personName, setPersonName] = React.useState<string[]>(items);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
    onSelectChange(value as string[]);
  };

  return (
    <Select
      labelId='demo-multiple-checkbox-label'
      id='demo-multiple-checkbox'
      multiple
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput label='Tag'/>}
      renderValue={(selected) => selected.join(', ')}
      MenuProps={MenuProps}
    >
      {names.map((name: string) => (
        <MenuItem key={name} value={name}>
          <Checkbox checked={personName.indexOf(name) > -1}/>
          <ListItemText primary={name}/>
        </MenuItem>
      ))}
    </Select>
  );
}
