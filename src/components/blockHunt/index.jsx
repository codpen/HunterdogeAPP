import { useEffect, useState } from 'react';
import { Box} from "@mui/system";
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import styled from 'styled-components';

import logo from '../../images/hunter_logo.png';
import arrowUp from '../../images/arrow-up.svg';

import  { GoogleSpreadsheet }  from 'google-spreadsheet';

import { SPREADSHEET_ID, CLIENT_EMAIL, PRIVATE_KEY, SHEET_ID_BANNER } from "../../constants";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const BlockHunt = () => {

  const [data, setData] = useState([])

  const appendSpreadsheet = async () => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID_BANNER];
      const rows = await sheet.getRows();
      setData(rows)
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  useEffect(() => {
    appendSpreadsheet();
  }, []);
  console.log(data[0]);
  return (
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            // px: 2,
            // height: '62px',
            borderRight: '2px solid #FFFBE2',
            flexShrink: 0
          }}>
            {data[0] ? (
              data.map((banner) => {
                return(
                <Banner url={banner.Link_Banner}/>
                )
            })) : (
              <>
              <Box component='img' src={logo}
              sx={{
                height: '42px',
                width: '42px',
              }}/>
            <Typography variant='subtitle1'
              sx={{
                pl: 2
              }}>
              #1 HUNTER DOGE | 
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
            </>
            )}
              
            
          
         
        
        </Stack>
  )
}

export default BlockHunt;

const Banner = styled.div`
  width: 470px;
  height: 80px;
  background-image: url(${({url}) => url});
  border-right: 2px solid #FFFBE2;
`
// <Banner url={data[0]?.Link || ''}/>