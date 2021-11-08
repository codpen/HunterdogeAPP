import { Stack} from '@mui/material';
import { Box, width } from '@mui/system';

import Menu from '../blocks/menu';
import AllTokensTable from '../components/AlltokensTable';
import PopularPreSales from '../components/popularPreSales';
import PromotedPreSales from '../components/promotedPresales';
import SearchOrFilter from '../components/searchOrFilter';

const AllTokens = () => {
  return(
    <Stack direction="row" alignItems="start"
    sx={{
      mt: 5,
      pl: '44px',
      pr: '51px',
      // backgroundImage: `url(${Paws}), url(${Loupe}), url(${Bow})`,
      backgroundRepeat: 'no-repeat', 
      backgroundPosition:'top 130px left 330px, top 130px right 340px, top 950px left 315px',       
    }}
    >
      <Menu/>
      <Stack sx={{ml: '66px'}}>
        <SearchOrFilter/>
        <AllTokensTable/>
        <PopularPreSales/>
      </Stack>
      {/* <Stack>
        <PromotedPreSales/>
        
      </Stack> */}
    </Stack>
  )
}

export default AllTokens;