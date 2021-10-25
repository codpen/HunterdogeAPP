import { FormControl, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import {  Button, InputAdornment, InputBase, Stack, IconButton, InputLabel } from '@mui/material';
import { Box, width } from '@mui/system';
import Input from '@mui/material/Input';

import { ReactComponent as IconComponent } from '../../images/loupe_ico.svg';
import logo from '../../images/hunter_logo.png';
import SearchInput from '../searchInput'

const CheckLiguidity = () => {
  return(
    <Box
      sx={{
        width: '612px',
        backgroundColor: '#FFDA01',
        borderRadius: '25px',
        boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        mr: 7,
        py: '19px',
        px: '20px'
      }}
    >
      <Typography variant='h3'>
      Check liquidity
      </Typography>
      <Stack direction="row" sx={{mt: 2, mb: 2}}>
        <SearchInput
          padding = {'0 5px 0 15px'}
          mr = {2}
        />
      </Stack>
      <Stack direction="row"
        sx={{
          backgroundColor: '#fff',
          border: '2px solid #B78300',
          borderRadius: '25px',
          px: '23px',
          pt: '13px',
          pb: '18px'
        }}
      >
        <Stack>
          <Box component='img' src={logo}
            sx={{
              height: '88px',
              width: '88px',
              mb: 1
            }}
          />
          <Typography variant='h4'
            sx={{fontSize: 17}}
          >
            $hunt
          </Typography>
          <Button variant="contained"
            sx={{px:'7px', fontSize: 13, mt: '25px'}}
          >
            more info
          </Button>
        </Stack>
        <Stack sx={{
            ml: '22px',
            width: '412px'
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center"
            sx={{
              mb: '8px',
              pb: 1,
              borderBottom: '1px solid #AB882E'
            }}
          >
            <Typography variant="h4"
              sx={{fontSize: 17}}
            >
              HunterDoge
            </Typography>
            <Typography variant="body2"
              sx={{
                fontSize: 12
              }}
            >
              All-time Rank: #322
            </Typography> 
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center"
            sx={{
              mb: 1.5                     
            }}
          >
            <Typography variant="body1"
              sx={{fontWeight: 500}}
            >
              Total Liquidity
            </Typography>
            <Typography variant="body1">
              $103’000’232
            </Typography> 
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center"
            sx={{
              mb: 1.5                     
            }}
          >
            <Typography variant="body1"
              sx={{fontWeight: 500}}
            >
              Pooled WBNB
            </Typography>
            <Typography variant="body1">
              1’043.25
            </Typography> 
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center"
            sx={{
              mb: 1.5                     
            }}
          >
            <Typography variant="body1"
              sx={{fontWeight: 500}}
            >
              Pooled HUNT
            </Typography>
            <Typography variant="body1">
              1’003 BNB
            </Typography> 
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center"
            sx={{
              // mb: '8px'                     
            }}
          >
            <Typography variant="body1"
              sx={{fontWeight: 500}}
            >
              ± Liquidity since deployment
            </Typography>
            <Typography variant="body1">
              -33.33%
            </Typography> 
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CheckLiguidity;