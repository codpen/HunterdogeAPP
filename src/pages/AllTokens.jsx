import React, { useState, useEffect } from 'react'
import { Stack } from '@mui/material';
import AllTokensTable from '../components/AlltokensTable';
import PopularPreSales from '../components/popularPreSales';
import PromotedPreSales from '../components/promotedPresales';
import SearchOrFilter from '../components/searchOrFilter';
import News from '../components/promotedPresales/news';
import { isMember } from '../connection/functions';
import { useWeb3React } from "@web3-react/core";
import { useWallet } from "@binance-chain/bsc-use-wallet";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const AllTokens = ({register}) => {
  const mobileMatches = useMediaQuery('(min-width:600px)');

  // const { account } = useWeb3React()
  
  return(
    // <Stack direction="row" alignItems="start"
    // sx={{
    //   mt: 5,
    //   pl: '44px',
    //   pr: '51px',
    //   // backgroundImage: `url(${Paws}), url(${Loupe}), url(${Bow})`,
    //   backgroundRepeat: 'no-repeat', 
    //   backgroundPosition:'top 130px left 330px, top 130px right 340px, top 950px left 315px',       
    // }}
    // >
    //   <Menu/>
      <Stack sx={{mx: mobileMatches? '60px': 'auto'}}>
        {register && <SearchOrFilter/>}
        <AllTokensTable/>
        <Stack direction="row" alignItems="center" sx={{gap: 8}}>
          <PopularPreSales/>
          {/* <News/> */}
        </Stack>
      </Stack>
    //   {/* <Stack>
    //     <PromotedPreSales/>
        
    //   </Stack> */}
    // {/* </Stack> */}
  )
}

export default AllTokens;