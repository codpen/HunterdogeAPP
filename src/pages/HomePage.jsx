import { Stack} from '@mui/material';
import { Box, width } from '@mui/system';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PromotedPreSales from '../components/promotedPresales';
import PopularTokens from '../components/popularTokens';
import PromotedSpots from '../components/promotedSpots';
import News from '../components/promotedPresales/news';
import PopularPreSales from '../components/popularPreSales';
import Menu from '../blocks/menu';
import CheckLiguidity from '../components/checkLiquidity';
import QuickFilter from '../components/quickFilter';

import Paws from '../images/paws_bg.svg';
import Loupe from '../images/loupe_bg.svg';
import Bow from '../images/bow_bg.svg';
import Footer from '../blocks/footer';

const HomePage = () => {

  return (
    // <>
    // <Stack direction="row" alignItems="start"
    //   sx={{
    //     mt: 5,
    //     pl: '44px',
    //     pr: '51px',
    //     backgroundImage: `url(${Paws}), url(${Loupe}), url(${Bow})`,
    //     backgroundRepeat: 'no-repeat',
    //     // backgroundSize:'100% 100%', 
    //     backgroundPosition:'top 130px left 330px, top 130px right 340px, top 950px left 315px',       
    //   }}
    //   >
        
    //   <Menu/>

      <Box
        sx={{
          mx: '65px',
          // mr: '64px',
          display: 'flex',
          flexWrap: 'wrap',
          width: '1037px',
          justifyContent: 'center'
        }}>
        <Stack direction="row" >
         <CheckLiguidity/>
         <QuickFilter/>
        </Stack>
        <PopularTokens/>
        <PopularPreSales/>
      </Box>

    //   <Stack>
    //     <PromotedPreSales/>
    //     <PromotedSpots/>
    //     <News/>
    //   </Stack>

      
    // </Stack>
    // </>
  )
}

export default HomePage;