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

const SPREADSHEET_ID = "1SqgE5cqm0yj7v9xCZxVs96XK85Zw8DD7JqW6_e9z7Vs";
const SHEET_ID = "0";
const CLIENT_EMAIL = "hunt-958@ascendant-pixel-331011.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4zbSVRfgudyiZ\nErTq1puQukfzSffwTXuKxT+0VcBeBAwK0B2hGPyXihN7/x47upyaTo2WtB8siO7A\ns7k9viYvUT3z7GPE5h12li0qUvVghsdRzvMWn5T+KAMiiKCk1Rod9UEr4fNgAnKA\nIJaVaDIGeULMOmI5HWRfn2aaSVjXhZkicDC1pxzbKABwqqqBSIRDNTdUF2m876Vr\niZmEzw7a+g3jKQLefmP2TlZ4HAw4RUEpbVRTVxMrzNDDLnbifziOvZdJsEDraoCY\nbVztSfTNOFTln6cMz1cultvtIyNiPDPs0H+gpgBcQAAsFxPrIFtyOqrWmw6FNMx5\nMp2TyNU1AgMBAAECggEADbB54Vo0Ltz3eOoAf3+I495TWMZF7jBkfRHCIk2n2Pmx\nGqvym0MKkv8mFQKqQ/+9fKtiTvjmG5pudSqFsk5/mEm1rnf4UVbqdSUIEMvhuVYX\n4GDVc6Y77IfHk6tN8GfeGLyuKIitn+hj1ZyUYFo+OmnedNpuTuTKe/rcKC7+vG2H\nGzJZ3Xvne09lgIMGPYf0T2n3ls5WCJgbDp/OPAG12phaYBJ/RP7FUC6eN+mZQRXI\n9c9ynLCwKsa+nYDqC6JcNRaHqYR1wnHKUXj8On7gnG2ApxgkAaHpgn2SGCKZ/a8a\nQP9wc8DCNpvMSqGVP034OnzEdvjXWYrhe3w2Zw4gkQKBgQD+urkpLgQcPlb+6EyC\nCtvZxCS/56+r+VxZ/Obua8DN4m+aaHTtDQwKENfPSCWrvxnKRZy2WcI7VHviOvLh\n3+Y5lXet/yBu/TE/gMdmhtFtsieLm19nBQ7wpolmLZxp1rYwigzUaoZnvficdUbu\nWxRE1CK4KW4M3ofooWQfJOrhJwKBgQC5ubC3Pn2v3g2kGFXtX2M3tn1KCFKImG7A\nbN4JCtscQLQYDa0owibtUnKaz6WZWn6soNuiL6/eDn8xYlw61+XagwHhsftc2e19\nYyDGedpyZpupnnDhyoz6g3XpCZjAs5zwC49+C2GVjthbbhVoqYp17y3eptls9agp\nC1M16VHYQwKBgQDwieZbSoa7HOsNntLQYeylQKDrTp8GqFxa5YQ0VDAmutJkXos7\nZfyebLU9mYVpHvX9maqYTz4oxGiPgtbkEIfYjJoNBkPcSt78dmDVIi4VhgvtuvRl\n1dL70Gciw6NWFljIkTP4SfdNc4iWRfCLGBqVvDRk70pqgKCaPfzLpBLgNQKBgE5T\ngLKXOTyNQmV9GegE/XwGi2pIfj47QyIGB9H6cRPGOe2W/vscfnxB9DFT9zvojVnS\ncS5CPEJDDONP3yO136s66vU7MY4kHmNuBemOhFEQ8v8i4epnmPMhs/123aQPW9Vk\nmryGoj4Hwzk0APVl4w3/s/Gdnj60j5nXu90VrD2vAoGBAO6Wx9nZoUVGS0bTZdzV\nlXw2qLY65aiJbw9dIJiVxR7+zt1k0yKjlr1zG0i/MFGd7ftnsmkzwbN4mgX3lILX\n09u18WzPP8UyMU/Ck8wNo6viVKxOGFdFslNRWBQfWCqto8eEMe6vD4TXjGMAqGUK\nq6jEm9pScJi6JA8zlOI1nxtL\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);


const PopularTokens = () => {
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
      console.log(rows);
      // const data = rows.map(item => [])
    } catch (e) {
      console.error('Error: ', e);
    }
  };
  useEffect(() => {
    appendSpreadsheet();
    const timer = setInterval(() => {
      appendSpreadsheet();
      console.log('интервал');
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  }, []);

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
            {data.map(row => {
              return(
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
            </TableRow> */}
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