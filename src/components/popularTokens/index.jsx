import {Button, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs} from '@material-ui/core';
import {Box} from '@mui/system';

import {Link} from 'react-router-dom';
import {useGoogleSheet} from '../../hooks/useGoogleSheet';
import hunterdoge from '../../images/hunterdoge.png';

import {useState} from 'react';
import TabPanel from '../TabPanel';
import {SHEET_ID} from "../../constants";
import Row from "./Row";

const PopularTokens = () => {
    const [value, setValue] = useState(0)
    const {data} = useGoogleSheet(SHEET_ID)
    console.log('data', data)

    const filterOneDay = data?.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (24 * 60 * 60 * 1000))
    const filterWeek = data?.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (7 * 24 * 60 * 60 * 1000))
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

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
                                <TableCell sx={{textAlign: 'left'}}>Votes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TabPanel value={value} index={0}>
                                {filterOneDay.map((row, index) => <Row key={index} index={index} data={row}/>)}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {filterWeek.map((row, index) => <Row key={index} index={index} data={row}/>)}
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                {data.map((row, index) => <Row key={index} index={index} data={row}/>)}
                            </TabPanel>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Button component={Link} to="/allTokens"
                    sx={{mt: 5, minWidth: '187px'}}
            >
                see all tokens
            </Button>
        </Box>
    )
}

export default PopularTokens;