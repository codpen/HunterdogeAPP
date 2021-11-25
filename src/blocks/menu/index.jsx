import {  Button, InputAdornment, InputBase, Stack, IconButton, InputLabel } from '@mui/material';
import { Box, width } from '@mui/system';

import { ReactComponent as IconComponent } from '../../images/loupe_ico.svg';
import hunterdogeShadow from '../../images/hunterdoge_menu.png';
import SearchInput from '../../components/searchInput'
import {Link} from "react-router-dom";
import ContactModal from '../../components/modal/Contact';
import { useState } from 'react';

const Menu = () => {
  const [open, setOpen] = useState(false)

  return(
    <Box
      sx={{
        position: 'sticky',
        top: '1em',
        zIndex: 2,
        paddingTop: '2em',
        width: '348px',
        height: '100%',
        backgroundColor: '#FAF0CB',
        borderRadius: '25px',
        boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
        pl:'38px',
        pr: '31px',
        pt: '36px',
        pb: 1
      }}
      >
        <Box sx={{position: 'relative'}}>
          <SearchInput small mb={'28px'}/>
        </Box>

        <Button variant="large" sx={{mb: 3}}  component={ Link } to="/allTokens">
          All Tokens
        </Button>
        {/* <Button variant="large" sx={{mb: 3}}>
          All Pre-sales
        </Button> */}
        <Button variant="large" sx={{mb: 3}} component={ Link } to="/nft-gallery">
          NFT GALLERY
        </Button>
        <a href="https://t.me/huntersground" target="_blank">
          <Button variant="large" sx={{mb: 3, lineHeight: '25px', height: 71}}>
            telegram shill bot
          </Button>
        </a>
        <Button variant="large" sx={{mb: 3}} onClick={() => {
          console.log('открыть модалку');
          setOpen(true)}
          }>
          Contact
        </Button>
       
        {/* <Button variant="large" sx={{mb: '36px'}}>
          Staking
        </Button> */}

        {/* <Stack direction="row">
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
        </Stack> */}
        <Stack direction="row" alignItems="end" justifyContent="space-between" sx={{mt: '27px'}}>
          <Button variant="transparent" target="_blank" onClick={() => window.open('https://t.me/hunterdogeofficial')}>
            + Submit your  coin
          </Button>
          <Box component="img" src={hunterdogeShadow}
            sx={{
              // position: 'absolute',
              // right: 0,
              bottom: '-115px'
            }}
          />
        </Stack>
        {open && <ContactModal setIsOpen={setOpen}/>}
    </Box>
  )
}

export default Menu;