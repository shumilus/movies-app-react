import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export interface DatepickerProps {
  date: string | undefined;
  onDateChange: (date: Dayjs | null) => void;
}

export default function Datepicker({ date, onDateChange }: DatepickerProps) {
  const [value, setValue] = React.useState<Dayjs | null>(
    date ? dayjs(date) : null,
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    onDateChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          inputFormat='MM/DD/YYYY'
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
