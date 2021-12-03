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
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Paws from '../images/paws_bg.svg';
import Loupe from '../images/loupe_bg.svg';
import Bow from '../images/bow_bg.svg';
import Footer from '../blocks/footer';
import GoTop from '../components/GoTop';

const HomePage = () => {
  const mobileMatches = useMediaQuery('(min-width:600px)');

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
          mx: !mobileMatches ? '0px': '65px',
          mt: !mobileMatches ? '60px': '0',
          display: 'flex',
          flexWrap: 'wrap',
          width: !mobileMatches ? '100%': '1037px',
          justifyContent: 'center'
        }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={6}
        >
          <CheckLiguidity/>
          <QuickFilter/>
        </Stack>
        <PopularTokens/>
        <PopularPreSales/>
        <GoTop scrollStepInPx="100" delayInMs="10.50"/>
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