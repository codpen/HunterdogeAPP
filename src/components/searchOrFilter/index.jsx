import { Box, width } from '@mui/system';
import {  Button, InputAdornment, InputBase, Stack, IconButton, InputLabel } from '@mui/material';
import { FormControl, MenuItem, Select, TextField, Typography } from '@material-ui/core';

import hunterdogeSearch from '../../images/hunterdoge_search.png';

import SearchInput from '../searchInput';
import SelectForm from '../selectForm';

const SearchOrFilter = () => {
  return(
    <Box
        sx={{
          
          display: 'flex',
          flexWrap: 'wrap',
          width: '1037px',
          // justifyContent: 'center',
          // textAlign: 'start'
        }}>
      <Box component='h2' sx={{fontSize: '44px', ml: 2}}>
        Search or filter your tokens
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '1043px',
          backgroundColor: '#FFDA01',
          borderRadius: '25px',
          boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          mt: '19px',
          // mr: 7,
          py: '21px',
          pl: '22px',
          pr: '18px'
        }}
      >
        
        <Stack direction="row"
          sx={{
            mb: 2,
            width: '417px'}}>
          <SearchInput mr={'11px'} padding = {'0 5px 0 15px'}/>
        </Stack>
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
          <SelectForm label="Sort tokens by:">
            <MenuItem value="">
              Highest first
            </MenuItem>
            <MenuItem value={10}>1.Highest first</MenuItem>
            <MenuItem value={20}>2.Highest first</MenuItem>
            <MenuItem value={30}>3.Highest first</MenuItem>
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
        <Button sx={{mt: '22px'}}>
          SEARCH
        </Button>
        <Box component="img" src={hunterdogeSearch}
          sx={{
            position: 'absolute',
            right: 30,
            top: -70
          }}
        />
      </Box>
    </Box>
  )
}

export default SearchOrFilter;