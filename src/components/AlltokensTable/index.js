import {
  Button,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography
} from '@material-ui/core';
import {Box} from '@mui/system';

import logo from '../../images/hunter_logo.png';
import {ReactComponent as IconDialogue} from '../../images/dialogue_ico.svg';
import {ReactComponent as IconReward} from '../../images/reward_ico.svg';
import arrowUp from '../../images/arrow-up.svg';
import close from '../../images/close_ico.svg';
import info from '../../images/info_ico.svg';

import {useGoogleSheet} from '../../hooks/useGoogleSheet';
import {useState} from 'react';
import TabPanel from '../TabPanel'
import Pagination from '../pagination/Pagination';
import CheckboxShow from '../checkboxShow';
import {SHEET_ID} from "../../constants";
import {ButtonGreen, ButtonRed, ButtonYellow, More, VoteWrapper} from "../common";


const AllTokensTable = () => {
  const [value, setValue] = useState(0)
  const {data} = useGoogleSheet(SHEET_ID)

  // const filterOneDay = data.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (24*60*60*1000))
  // const filterWeek = data.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (7*24*60*60*1000))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }


  const backToTop = () => console.log('back')

  const closeTab = () => console.log('close')

  const vote = () => console.log('vote')


  return (
    <Box sx={{mt: 4, width: '1426px', textAlign: 'center', position: 'relative'}}>
      <Tabs
        value={value} onChange={handleChange} aria-label="sort"
        >
        <Tab label="Search 1" sx={{position: 'relative', width: 224}}
        icon={<Box component="img" src={close}
        onClick={() => closeTab()}
        sx={{
          position: 'absolute',
          right: '10px',
          top: '18px'
        }}
      />}>
        
        </Tab>
        {/*<Tab label="Today’s best" sx={{width: 224}}></Tab>*/}
        {/*<Tab label="This week’s" sx={{width: 224}}></Tab>*/}
        <Tab label="all-time" sx={{width: 224}}></Tab>
      </Tabs>
      <Box
        sx={{
          // height: '544px',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          borderRadius: '25px',
          borderTopLeftRadius: 0,
          boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
          border: '3px solid #FFF3D4',
          position: 'relative'
        }}
      >
        <Box component="img" src={info}
          // onClick={() => closeTab()}
          sx={{
            position: 'absolute',
            right: '14px',
            top: '11px'
          }}
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#Rank</TableCell>
                <TableCell sx={{textAlign: 'left'}}>name</TableCell>
                <TableCell>Ticker</TableCell>
                <TableCell>MCAP</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Liq / Mcap<br/> Ratio</TableCell>
                <TableCell>holders</TableCell>
                <TableCell>Popularity</TableCell>
                <TableCell sx={{textAlign: 'left'}}>Votes</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
            <TabPanel
              value={value} index={0}
              >
              {data.map((row, index) => {
                return(
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Stack direction="row" alignItems="center" >
                      <Typography variant="h6" sx={{mr:'36px'}}>
                        {index+1}.
                      </Typography>
                      <Box component="img" src={logo} sx={{width: '66px'}}/>
                      </Stack>
                    </TableCell>
                    <TableCell >
                      <Stack>
                        <Typography variant="h5">
                          {row.Project_Name}
                        </Typography>
                        <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                          <IconReward/>
                          <IconDialogue/>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell >
                      <Typography variant="h6" sx={{fontWeight: 900}}>
                        {row.Project_Symbol}
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
                          {row.Project_Price}
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
                      <Typography variant="h6">
                        HIGH
                      </Typography>
                      <Typography variant="h6" sx={{fontSize: 16, fontWeight: 600}}>
                        0.67
                      </Typography>
                    </TableCell>
                    <TableCell >
                      <Typography variant="table">
                        322’000’222
                      </Typography>
                    </TableCell>
                    <TableCell >
                      <Typography variant="table" sx={{textTransform: 'capitalize'}}>
                        Very high
                      </Typography>
                    </TableCell>

                    <TableCell >
                      <Stack direction="row" alignItems="center">
                        <Typography variant="table">
                          156’093
                        </Typography>
                        <VoteWrapper>
                          <ButtonRed height={'22px'} weight={'700'} size={'12px'}>
                            VOTE - 1
                          </ButtonRed>
                          <ButtonYellow height={'22px'} weight={'700'}  size={'12px'}>
                            VOTE + 2
                          </ButtonYellow>
                          <ButtonGreen height={'22px'} weight={'700'}  size={'12px'}>
                            VOTE + 1
                          </ButtonGreen>
                        </VoteWrapper>
                        <More>...</More>
                        {/*<Button onClick={() => vote()} sx={{ml: '33px', mr: 2}}>*/}
                        {/*  VOTE*/}
                        {/*</Button>*/}
                        {/*<Button variant="more">...</Button>*/}
                      </Stack>
                    </TableCell>            
                  </TableRow>
                )
              })}
            </TabPanel>
            <TabPanel value={value} index={1}>
            {data.map((row, index) => {
                return(
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Stack direction="row" alignItems="center" >
                      <Typography variant="h6" sx={{mr:'36px'}}>
                        {index+1}.
                      </Typography>
                      <Box component="img" src={logo} sx={{width: '66px'}}/>
                      </Stack>
                    </TableCell>
                    <TableCell >
                      <Stack>
                        <Typography variant="h5">
                          {row.Project_Name}
                        </Typography>
                        <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                          <IconReward/>
                          <IconDialogue/>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell >
                      <Typography variant="h6" sx={{fontWeight: 900}}>
                        {row.Project_Symbol}
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
                          {row.Project_Price}
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
                      <Typography variant="h6">
                        HIGH
                      </Typography>
                      <Typography variant="h6" sx={{fontSize: 16, fontWeight: 600}}>
                        0.67
                      </Typography>
                    </TableCell>
                    <TableCell >
                      <Typography variant="table">
                        322’000’222
                      </Typography>
                    </TableCell>
                    <TableCell >
                      <Typography variant="table" sx={{textTransform: 'capitalize'}}>
                        Very high
                      </Typography>
                    </TableCell>

                    <TableCell >
                      <Stack direction="row" alignItems="center">
                        <Typography variant="table">
                          156’093
                        </Typography>
                        <VoteWrapper>
                          <ButtonRed height={'22px'} weight={'700'} size={'12px'}>
                            VOTE - 1
                          </ButtonRed>
                          <ButtonYellow height={'22px'} weight={'700'}  size={'12px'}>
                            VOTE + 2
                          </ButtonYellow>
                          <ButtonGreen height={'22px'} weight={'700'}  size={'12px'}>
                            VOTE + 1
                          </ButtonGreen>
                        </VoteWrapper>
                        <More>...</More>
                        {/*<Button sx={{ml: '33px', mr: 2}}>*/}
                        {/*  VOTE*/}
                        {/*</Button>*/}
                        {/*<Button variant="more">...</Button>*/}
                      </Stack>
                    </TableCell>            
                  </TableRow>
                )
              })}
            </TabPanel>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Stack direction="row" justifyContent="space-between" sx={{mt: 3, px: 2}}>
        <CheckboxShow/>
        <Pagination count={56}/>
        <Button variant="transparent" sx={{ml: '380px'}}
        onClick={() => backToTop()}>
          go back top
        </Button>
      </Stack>
    </Box>
  )
}

export default AllTokensTable;