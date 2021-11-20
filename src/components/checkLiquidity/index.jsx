import { FormControl, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import {  Button, InputAdornment, InputBase, Stack, IconButton, InputLabel } from '@mui/material';
import { Box, width } from '@mui/system';
import Input from '@mui/material/Input';

import { ReactComponent as IconComponent } from '../../images/loupe_ico.svg';
import logo from '../../images/hunter_logo.png';
import SearchInput from '../searchInput'
import { useHistory } from "react-router-dom";
import { useState } from 'react';

const CheckLiguidity = () => {
  const history = useHistory()

  const [getMoreInfo, setGetMoreInfo] = useState(false)
  const [checkLiq, setCheckLiq] = useState(false)

  const handleGetMoreInfo = () => {
    // history.push('/token/0x04F73A09e2eb410205BE256054794fB452f0D245')
    setGetMoreInfo(true)
  }

  return(
    <Box
      sx={{
        width: '612px',
        backgroundColor: '#FAF0CB',
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
        <Stack sx={{ width: '100%', height: '250px' }}>
          {
            getMoreInfo
            ?
            <Typography variant="h4"
              sx={{fontSize: 25, m: 'auto'}}
            >
              SEARCH FOR ANY BSC TOKEN
            </Typography>
            :
            <>
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
                  mb: 1.5                     
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
              <Stack direction="row" justifyContent="space-between" alignItems="center" 
                sx={{
                  mb: 1.5                     
                }}
              >
                <Typography variant="body1"
                  sx={{fontWeight: 500}}
                >
                  Honeypot?
                </Typography>
                <Typography variant="body1">
                  Yes
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
                  Buy / Sell taxes
                </Typography>
                <Typography variant="body1">
                  5% / 10%
                </Typography> 
              </Stack>
            </>
          }
        </Stack>
      </Stack>
      <Stack>
        {
          getMoreInfo 
          ?
            <Button sx={{ mt: '12px', mx: 'auto'}}>
                SHOW ON DEXTOOLS
            </Button>
          :
            <Button onClick={ handleGetMoreInfo } sx={{ mt: '12px', mx: 'auto'}}>
              GET MORE INFO
            </Button>
        }
      </Stack>
    </Box>
  )
}

export default CheckLiguidity;