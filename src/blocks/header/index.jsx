import {Box} from "@mui/system";
import Stack from "@mui/material/Stack";
import {styled} from '@material-ui/core/styles';

import BlockHunt from '../../components/blockHunt'

const Header = () => {
    return (
        <RootStyle>
            <Stack direction="row" alignItems="center" sx={{
                width: '2600xp',
                overflow: 'auto hidden'
            }}>
                <Box
                    component='h1'
                    sx={{
                        fontSize: '33px',
                        height: '62px',
                        color: '#FFFBE2',
                        textShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
                        px: 2,
                        display: 'flex',
                        alignItems: 'center',
                        borderRight: '6px solid #FFFBE2',
                        flexShrink: 0,
                    }}
                >
                    BIGGEST GAINERS
                </Box>
                <BlockHunt number={'1'}/>
                <BlockHunt number={'2'}/>
                <BlockHunt number={'3'}/>
                <BlockHunt number={'4'}/>
            </Stack>
        </RootStyle>
    )
}

export default Header;

const RootStyle = styled('div')(({theme}) => ({
    background: 'linear-gradient(270deg, rgba(136, 109, 40, 0.5) 3.52%, #886D28 18.73%, #886D28 82.08%, rgba(136, 109, 40, 0.5) 98.54%)',
    boxShadow: '0px 5px 0px rgba(0, 0, 0, 0.1)',
    height: '62pх',
    maxWidth: '1920px',
    overflow: 'hidden'
    // overflowX: 'scroll'
    // padding: '',
    // [theme.breakpoints.down('lg')]: {
    //   paddingBottom: theme.spacing(15),
    //   paddingTop: theme.spacing(14),
    // },
}))