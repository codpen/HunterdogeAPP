import {useEffect, useState} from 'react';
import Stack from "@mui/material/Stack";
import styled from 'styled-components';

import {GoogleSpreadsheet} from 'google-spreadsheet';

import {CLIENT_EMAIL, PRIVATE_KEY, SHEET_ID_BANNER, SPREADSHEET_ID} from "../../constants";

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
            pt: 2,
            width: '100vw',
            maxWidth: '1720px',
            borderRight: '2px solid #FFFBE2',
            flexShrink: 0,
            justifyContent: 'space-around'
          }}>
            {data[0] ? (
                data.map((banner) => {
                    return (
                        <Link target="_blank" href='#'>
                            <Banner url={banner.Link_Banner}/>
                        </Link>
                        
                    )
                })) : (
                null
                //   <>
                //   <Box component='img' src={logo}
                //   sx={{
                //     height: '42px',
                //     width: '42px',
                //   }}/>
                // <Typography variant='subtitle1'
                //   sx={{
                //     pl: 2
                //   }}>
                //   #1 HUNTER DOGE |
                // </Typography>
                // <Typography variant='subtitle1'
                //   sx={{
                //     pr: 2,
                //     fontWeight:500,
                //     fontStyle: 'italic'
                //   }}>
                //   HUNT
                // </Typography>
                // <Box component='img' src={arrowUp} />
                // <Stack alignItems="center"
                //   sx={{
                //     pl: 1,
                //     mt: '13px'
                //   }}
                // >
                //   <Typography variant='caption' sx={{fontSize: 22}}>
                //     +12.99%
                //   </Typography>
                //   <Typography variant='caption'>
                //     24H
                //   </Typography>

                // </Stack>
                // </>
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
const Link = styled.a`
    display: block;
`