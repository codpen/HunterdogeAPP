import { FormControl, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import {  Button, InputAdornment, InputBase, Stack, IconButton, InputLabel } from '@mui/material';


import { ReactComponent as IconSelect } from '../../images/select_ico.svg';
import ButtonCheckbox from '../buttonCheckbox';
import SelectForm from '../selectForm';

const QuickFilter = () => {
  const search = () => console.log('search')
  return(
    <Stack
      sx={{
        padding: '18px 25px 22px 27px',
        width: '355px',
        backgroundColor: '#FFDA01',
        borderRadius: '25px',
        boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <Typography variant='h3' sx={{mb: '13px'}}>
        Quick Filter
      </Typography>
      <Stack direction="row" gap="13px">
        <SelectForm label="Filter tokens by:">
          <MenuItem value="">
            Market Cap
          </MenuItem>
          <MenuItem value={10}>1.Market Cap</MenuItem>
          <MenuItem value={20}>2.Market Cap</MenuItem>
          <MenuItem value={30}>3.Market Cap</MenuItem>
        </SelectForm>
        <SelectForm label="Sort tokens by:">
          <MenuItem value="">
            Highest first
          </MenuItem>
          <MenuItem value={10}>1.Highest first</MenuItem>
          <MenuItem value={20}>2.Highest first</MenuItem>
          <MenuItem value={30}>3.Highest first</MenuItem>
        </SelectForm>
      </Stack>
      <Typography variant='body1' sx={{mb: '10px', mt: '18px', textAlign: 'start'}}>
        Show only tokens with:
      </Typography>
      <Stack direction="row" sx={{mb: '14px',}}>
        <ButtonCheckbox  mr='15px' active >
          Security Audit
        </ButtonCheckbox>
        <ButtonCheckbox>
          Doxxed Team
        </ButtonCheckbox>
      </Stack>
      <ButtonCheckbox
        width={'145px'}
      >
        High Liquidity
      </ButtonCheckbox>
      <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'start', mt: '5px', ml: 4}}>
        Mcap Ratio
      </Typography>
      <Button onClick={() => search()} sx={{width: '96px', mt: '12px', mx: 'auto'}}>
        SEARCH
      </Button>
    </Stack>
  )
}

export default QuickFilter