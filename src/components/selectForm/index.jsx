import { FormControl, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import {  Button, InputAdornment, InputBase, Stack, IconButton, InputLabel } from '@mui/material';
import { ReactComponent as IconSelect } from '../../images/select_ico.svg';

const SelectForm = ({label, children}) => {
  return(
    <FormControl fullWidth sx={{textAlign: 'start'}}>
      <InputLabel id='select-label' sx={{mb: 1}}>{label}</InputLabel>
      <Select
        labelId='select-label'
        id='select'
        value=''
        label='Market Cap'
        displayEmpty
        // onChange={handleChange}
        IconComponent = {IconSelect}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {children}
      </Select>
    </FormControl>
  )
}

export default SelectForm;