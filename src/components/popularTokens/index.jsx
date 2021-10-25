import { Tab, Table, TableContainer, TableHead, Tabs, TableRow, TableCell, TableBody, Typography, Stack, Button } from '@material-ui/core';
import { Box } from '@mui/system';

import { Link } from 'react-router-dom';

import logo from '../../images/hunter_logo.png';
import { ReactComponent as IconGuard } from '../../images/guard_ico.svg';
import { ReactComponent as IconDialogue } from '../../images/dialogue_ico.svg';
import { ReactComponent as IconReward } from '../../images/reward_ico.svg';
import arrowUp from '../../images/arrow-up.svg';
import arrowDown from '../../images/arrow-down.svg';
import hunterdoge from '../../images/hunterdoge.png';



const PopularTokens = () => {
  return (
    <Box sx={{mt: '20px', width: '100%', textAlign: 'center', position: 'relative'}}>
      <Box component="img" src={hunterdoge}
        sx={{
          position: 'absolute',
          right: 0,
          top: '2%'
        }}
      />
      <Box component='h2' sx={{fontSize: '60px', mb: 3}}>
        Most popular Tokens
      </Box>
      <Tabs>
        <Tab label="Today’s best"></Tab>
        <Tab label="This week’s"></Tab>
        <Tab label="all-time"></Tab>
      </Tabs>
      <Box
        sx={{
          // height: '544px',
          
          backgroundColor: '#ffffff',
          borderRadius: '25px',
          borderTopLeftRadius: 0,
          boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
          border: '3px solid #FFF3D4'
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#Rank</TableCell>
                <TableCell>name</TableCell>
                <TableCell>Ticker</TableCell>
                <TableCell>MCAP</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Votes</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center" >
                <Typography variant="h6" sx={{mr:'36px'}}>
                  1.
                </Typography>
                <Box component="img" src={logo} sx={{width: '66px'}}/>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="h5">
                    HunterDoge
                  </Typography>
                  <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                    <IconReward/>
                    <IconDialogue/>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Typography variant="h6" sx={{fontWeight: 900}}>
                  HUNT
                </Typography>
              </TableCell>
              <TableCell >
                <Typography variant="table">
                  $900’999
                </Typography>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="table" sx={{pt: '26px'}}>
                    $0.0000005
                  </Typography>
                  <Stack direction="row" sx={{mt: 1}}>
                    <Box component='img' src={arrowUp} sx={{width: '17px', mr: 1}}/>
                    <Typography variant="caption">
                      24H = +12.99%
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack direction="row" alignItems="center">
                  <Typography variant="table">
                    156’093
                  </Typography>
                  <Button sx={{ml: '33px', mr: 2}}>
                    VOTE
                  </Button>
                  <Button variant="more">...</Button>
                </Stack>
              </TableCell>            
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center" >
                <Typography variant="h6" sx={{mr:'36px'}}>
                  2.
                </Typography>
                <Box component="img" src={logo} sx={{width: '66px'}}/>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="h5">
                    HunterDoge
                  </Typography>
                  <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                    <IconGuard/>
                    <IconReward/>
                    <IconDialogue/>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Typography variant="h6" sx={{fontWeight: 900}}>
                  ARK
                </Typography>
              </TableCell>
              <TableCell >
                <Typography variant="table">
                  $1.9 M
                </Typography>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="table" sx={{pt: '26px'}}>
                    $0.0000005
                  </Typography>
                  <Stack direction="row" sx={{mt: 1}}>
                    <Box component='img' src={arrowDown} sx={{width: '17px', mr: 1}}/>
                    <Typography variant="caption" sx={{color: 'red'}}>
                      24H = +12.99%
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack direction="row" alignItems="center">
                  <Typography variant="table">
                    156’093
                  </Typography>
                  <Button sx={{ml: '33px', mr: 2}}>
                    VOTE
                  </Button>
                  <Button variant="more">...</Button>
                </Stack>
              </TableCell>            
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center" >
                <Typography variant="h6" sx={{mr:'36px'}}>
                  3.
                </Typography>
                <Box component="img" src={logo} sx={{width: '66px'}}/>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="h5">
                    HunterDoge
                  </Typography>
                  <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                    {/* <IconReward/> */}
                    <IconDialogue/>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Typography variant="h6" sx={{fontWeight: 900}}>
                  SOL
                </Typography>
              </TableCell>
              <TableCell >
                <Typography variant="table">
                  $1.099 B
                </Typography>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="table" sx={{pt: '26px'}}>
                    $0.0000005
                  </Typography>
                  <Stack direction="row" sx={{mt: 1}}>
                    <Box component='img' src={arrowUp} sx={{width: '17px', mr: 1}}/>
                    <Typography variant="caption">
                      24H = +12.99%
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack direction="row" alignItems="center">
                  <Typography variant="table">
                    156’093
                  </Typography>
                  <Button sx={{ml: '33px', mr: 2}}>
                    VOTE
                  </Button>
                  <Button variant="more">...</Button>
                </Stack>
              </TableCell>            
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center" >
                <Typography variant="h6" sx={{mr:'36px'}}>
                  4.
                </Typography>
                <Box component="img" src={logo} sx={{width: '66px'}}/>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="h5">
                    HunterDoge
                  </Typography>
                  <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                    <IconReward/>
                    {/* <IconDialogue/> */}
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Typography variant="h6" sx={{fontWeight: 900}}>
                  HBARAS
                </Typography>
              </TableCell>
              <TableCell >
                <Typography variant="table">
                  $900’999
                </Typography>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="table" sx={{pt: '26px'}}>
                    $0.0000005
                  </Typography>
                  <Stack direction="row" sx={{mt: 1}}>
                    <Box component='img' src={arrowUp} sx={{width: '17px', mr: 1}}/>
                    <Typography variant="caption">
                      24H = +12.99%
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack direction="row" alignItems="center">
                  <Typography variant="table">
                    156’093
                  </Typography>
                  <Button sx={{ml: '33px', mr: 2}}>
                    VOTE
                  </Button>
                  <Button variant="more">...</Button>
                </Stack>
              </TableCell>            
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center" >
                <Typography variant="h6" sx={{mr:'36px'}}>
                  5.
                </Typography>
                <Box component="img" src={logo} sx={{width: '66px'}}/>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="h5">
                    HunterDoge
                  </Typography>
                  <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                    {/* <IconReward/>
                    <IconDialogue/> */}
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Typography variant="h6" sx={{fontWeight: 900}}>
                  HBAR
                </Typography>
              </TableCell>
              <TableCell >
                <Typography variant="table">
                  $1.1 M
                </Typography>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="table" sx={{pt: '26px'}}>
                    $0.0000005
                  </Typography>
                  <Stack direction="row" sx={{mt: 1}}>
                    <Box component='img' src={arrowUp} sx={{width: '17px', mr: 1}}/>
                    <Typography variant="caption">
                      24H = +12.99%
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack direction="row" alignItems="center">
                  <Typography variant="table">
                    156’093
                  </Typography>
                  <Button sx={{ml: '33px', mr: 2}}>
                    VOTE
                  </Button>
                  <Button variant="more">...</Button>
                </Stack>
              </TableCell>            
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center" >
                <Typography variant="h6" sx={{mr:'36px'}}>
                  6.
                </Typography>
                <Box component="img" src={logo} sx={{width: '66px'}}/>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="h5">
                    HunterDoge
                  </Typography>
                  <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                    {/* <IconReward/>
                    <IconDialogue/> */}
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Typography variant="h6" sx={{fontWeight: 900}}>
                  ETH
                </Typography>
              </TableCell>
              <TableCell >
                <Typography variant="table">
                  $211.6 M
                </Typography>
              </TableCell>
              <TableCell >
                <Stack>
                  <Typography variant="table" sx={{pt: '26px'}}>
                    $0.0000005
                  </Typography>
                  <Stack direction="row" sx={{mt: 1}}>
                    <Box component='img' src={arrowUp} sx={{width: '17px', mr: 1}}/>
                    <Typography variant="caption">
                      24H = +12.99%
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell >
                <Stack direction="row" alignItems="center">
                  <Typography variant="table">
                    156’093
                  </Typography>
                  <Button sx={{ml: '33px', mr: 2}}>
                    VOTE
                  </Button>
                  <Button variant="more">...</Button>
                </Stack>
              </TableCell>            
            </TableRow>
            
            
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Button component={ Link } to="/allTokens"
        sx={{mt: 5, minWidth: '187px'}}
        >
        see all tokens
      </Button>
    </Box>
  )
}

export default PopularTokens;