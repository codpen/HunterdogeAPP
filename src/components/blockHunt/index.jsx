import { Box} from "@mui/system";
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";

import logo from '../../images/hunter_logo.png';
import arrowUp from '../../images/arrow-up.svg';


const BlockHunt = ({ number }) => {
  return (
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            px: 2,
            height: '62px',
            borderRight: '2px solid #FFFBE2',
            flexShrink: 0
          }}>
          <Box component='img' src={logo}
            sx={{
              height: '42px',
              width: '42px',
            }}/>
          <Typography variant='subtitle1'
            sx={{
              pl: 2
            }}>
            #{number} HUNTER DOGE | 
          </Typography>
          <Typography variant='subtitle1'
            sx={{
              pr: 2,
              fontWeight:500,
              fontStyle: 'italic'
            }}>
            HUNT
          </Typography>
          <Box component='img' src={arrowUp} />
          <Stack alignItems="center"
            sx={{
              pl: 1,
              mt: '13px'
            }}
          >
            <Typography variant='caption' sx={{fontSize: 22}}>
              +12.99% 
            </Typography>
            <Typography variant='caption'>
              24H 
            </Typography>
            
          </Stack>
          
        </Stack>
  )
}

export default BlockHunt;