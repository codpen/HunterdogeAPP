import { Stack, Typography } from "@material-ui/core";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxShow = () => {
  return(
    <Stack direction="row" alignItems="center">
      <Typography sx={{mr: 3}}>
        Show
      </Typography>
      <FormControlLabel control={<Checkbox defaultChecked sx={{
    root: {
      color: 'red',
    },
    '&.Mui-checked': {
      color: '#AB882E',
    },
  }}/>} label="25" />
      <FormControlLabel control={<Checkbox sx={{
    root: {
      color: 'red',
    },
    '&.Mui-checked': {
      color: '#AB882E',
    },
  }}/>} label="50" />
      <FormControlLabel control={<Checkbox sx={{
    root: {
      color: 'red',
    },
    '&.Mui-checked': {
      color: '#AB882E',
    },
  }}/>} label="100" />
      <Typography>
        per page
      </Typography>
    </Stack>
  )
}

export default CheckboxShow;