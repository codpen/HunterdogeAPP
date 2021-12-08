import {Stack} from '@mui/material';
import {Box} from '@mui/system';
import PopularTokens from '../components/popularTokens';
import PopularPreSales from '../components/popularPreSales';
import CheckLiguidity from '../components/checkLiquidity';
import QuickFilter from '../components/quickFilter';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const HomePage = () => {
    const mobileMatches = useMediaQuery('(min-width:600px)');

    return (
        <Box
            sx={{
                mx: !mobileMatches ? '0px' : '65px',
                mt: !mobileMatches ? '60px' : '0',
                display: 'flex',
                flexWrap: 'wrap',
                width: !mobileMatches ? '100%' : '1037px',
                justifyContent: 'center'
            }}>
            <Stack
                direction={{xs: 'column', sm: 'row'}}
                spacing={6}
            >
                <CheckLiguidity/>
                <QuickFilter/>
            </Stack>
            <PopularTokens/>
            <PopularPreSales/>
        </Box>
    )
}

export default HomePage;