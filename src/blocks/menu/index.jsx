import {  Button, InputAdornment, InputBase, Stack, IconButton, InputLabel } from '@mui/material';
import { Box, width } from '@mui/system';

import { ReactComponent as IconComponent } from '../../images/loupe_ico.svg';
import hunterdogeShadow from '../../images/hunterdoge_shadow.png';
import SearchInput from '../../components/searchInput'

const Menu = () => {
  return(
    <Box
      sx={{
        position: 'relative',
        width: '348px',
        backgroundColor: '#FAF0CB',
        borderRadius: '25px',
        boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
        pl:'38px',
        pr: '31px',
        pt: '36px',
        pb: '31px'
      }}
      >
        <Box sx={{position: 'relative'}}>
          <SearchInput small mb={'28px'}/>
        </Box>

        <Button variant="large" sx={{mb: 3}}>
          All Tokens
        </Button>
        <Button variant="large" sx={{mb: 3}}>
          All Pre-sales
        </Button>
        <Button variant="large" sx={{mb: 3}}>
          Lottery
        </Button>
        <Button variant="large" sx={{mb: 3}}>
          News & Updates
        </Button>
        <Button variant="large" sx={{mb: 3}}>
          shill & Win
        </Button>
        <Button variant="large" sx={{mb: '36px'}}>
          Staking
        </Button>

        <Stack direction="row">
          <Button 
            sx={{
              width: '100%',
              mr: '12px',
            }}
          >
            Documents
          </Button>
          <Button
            sx={{width: '100%'}}
          >
            Contact
          </Button>
        </Stack>
        
        <Box component="img" src={hunterdogeShadow}
          sx={{
            position: 'absolute',
            right: 0,
            bottom: '-115px'
          }}
        />
    </Box>
  )
}

export default Menu;