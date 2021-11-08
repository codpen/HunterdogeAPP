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

import  { GoogleSpreadsheet }  from 'google-spreadsheet';
import { useEffect, useState } from 'react';
import TabPanel from '../TabPanel'

const SPREADSHEET_ID = "10es63D__Qs2hpZKEYvmStkrWHzVyCQtCdxGM2gMBBzQ";
const SHEET_ID = "0";
const CLIENT_EMAIL = "hunterdoge@hunterdige.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDtsnip5zk7MrvY\nYWaq9RfGvc9CxPbrZyVyhlw61H7xcwxM56EbEgZ5NJPMDpaxHwU52Mst668hMSln\nOV5fI/zi3S65EDxEq9kWOp02fvyjUxoSF92obqSWarZlNuGSODQ0eubVVFDPJ0+p\nDi0/fbI/WQIq+By0qNreVKHgdt/0FirEZmwk2E+nFdeEoq57IRV7xV30T3lCG97j\nO17AH1+BjAY1KxgV9Ot+/YeoQs3nFpoexrlU8ALX5tJa2lzgeZ57+QMMn2/5LHQW\n2cmxPWv4ZyMWVSjDvq9wUfHhIXBSWIf4deVDKHjJq3izVjtTxyagLu0cXzmxDzTT\nKSL3u8G3AgMBAAECggEAAXNlaSQQJVxZ6SgvCDwWuQ/PhAjPuQAYKmrHhVRmsfKR\n0KZZRWEGyRaZEFXGda5Kyd+Y3d7iYsF6Dzc6bDo8AOZ4soh21bR2zrvs2bhMsnJ/\nZjzfDXgfaQudsWB0YAAX0Xoujn7FP35t7go4HHsX62sPqFN7WV7udwztMAGJvGOj\nO/6DcuIdv9okngBWzT+Eb6m+FIsHFT9xHb3hQ8M84rCKYpszNoAq9YJEz8fIBH9T\nElw0xb2XQ13cdlacgC45lCr8doHc+qfvrRHG0dnyYR7oFz8CI5gSkqFkfAFRoUCB\nIkOUFrA8tdGMA6+DAYTT6bQ6PZJOgw1iQb4Dd35bAQKBgQD95O3Md7TXL0GoiJ2N\n9AAl2Ty+Y3Lsk8/eExY7uYvWPhV46piR5sbeXRz92KxTai7yQSax4FY4Z8cMs9xC\nMPEohfqQX3Fgj599ydiHKiRmqyX1GS6Il/TSVf8HpJA30M6Ph6Juy0fu+V/g4ZRd\nqiLTVeJ8ma4LAnvrjKEfBsPMnwKBgQDvqycPbCMQzvALDVP5HK831uY6Q1o6laQX\nGHexVZ1cgoznb/UzLQQoOCGc+rpyoSp909jnfVQHQ+JxC2ztYP0YRP4LUhdZUey/\n5azZzkmDVqvsnHKKBoh6F8k90nQDqSILJiFRLW25I1So81cu7E7t1HLf/8grQI/j\nb1F7S/Zb6QKBgAb7Jna6y+Qmzn1d1Ec08FQaFwt9HInYvpxylefqgCfR6TE78hoA\n6HLwyH1KWeKpRsUueWvmqTg/0j9NKr8/LUJZ/Lu/hBSNnmsNA8EjrYCNMCv/F0J2\nOysVZj/FjJmcSjG0HwlA2ad+f95lFXlF1lNNRz750slGtjWR1lROEVAtAoGBAKJC\ny/UjDzKIB/hTk7CqfO5fLgvwIZxcR3XjeNW00w8Yy/C82dNF/PSF3Cv9jFGjT7NU\nxBslvMgWa66BP8QO0AuoWh6r+2bbkl/xTW9AvICRI2DUIq/T8H5IsFSMsULxNT07\nGX9uNEUN6HliFnqMPnvCQ+vnrkuqMECY0x+YtDhRAoGACD7I9T/vf+mFDmxNMP6O\nWLTyDLh64GQKVu/fW2aVmNHn65Bh1dTZpbS6hrRFz93iTImCRs8XdYWpaTXf6qjo\n3ICouNfvcdzXz7Dvi0easyQC15TWlna8hQK+Ol1YDv1XzMFXGoaot/5ITVzvegjc\nhlsWQQTaSj3BtDOrG7BcAQs=\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const AllTokensTable = () => {
  const [value, setValue] = useState(0)
  const [data, setData] = useState([])

  const appendSpreadsheet = async () => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      const rows = await sheet.getRows();
      setData(rows)
    } catch (e) {
      console.error('Error: ', e);
    }
  };
  useEffect(() => {
    appendSpreadsheet();
    const timer = setInterval(() => {
      appendSpreadsheet();
    }, 30000)
    return () => {
      clearInterval(timer)
    }
  }, []);

  const filterOneDay = data.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (24*60*60*1000))
  const filterWeek = data.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (7*24*60*60*1000))


  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{mt: 4, width: '100%', textAlign: 'center', position: 'relative'}}>
      <Tabs
        value={value} onChange={handleChange} aria-label="sort"
        >
        <Tab label="Today’s best"></Tab>
        <Tab label="This week’s"></Tab>
        <Tab label="all-time"></Tab>
      </Tabs>
      <Box
        sx={{
          // height: '544px',
          overflow: 'hidden',
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
              {filterOneDay.map((row, index) => {
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
                        <Button sx={{ml: '33px', mr: 2}}>
                          VOTE
                        </Button>
                        <Button variant="more">...</Button>
                      </Stack>
                    </TableCell>            
                  </TableRow>
                )
              })}
            </TabPanel>
            
            <TabPanel value={value} index={1}>
            {filterWeek.map((row, index) => {
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
                        <Button sx={{ml: '33px', mr: 2}}>
                          VOTE
                        </Button>
                        <Button variant="more">...</Button>
                      </Stack>
                    </TableCell>            
                  </TableRow>
                )
              })}
            </TabPanel>
            <TabPanel value={value} index={2}>
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
                        <Button sx={{ml: '33px', mr: 2}}>
                          VOTE
                        </Button>
                        <Button variant="more">...</Button>
                      </Stack>
                    </TableCell>            
                  </TableRow>
                )
              })}
            </TabPanel>
            {/* <TableRow>
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
                <Box  src={logo} sx={{width: '66px'}}/>
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
                    <IconReward/>
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
                    <IconDialogue/>
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
                    <IconReward/>
                    <IconDialogue/>
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
                    <IconReward/>
                    <IconDialogue/>
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
            </TableRow> */}
            
            
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

export default AllTokensTable;