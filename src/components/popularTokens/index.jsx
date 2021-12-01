import React, { useContext } from 'react';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Box} from '@mui/system';

import {Link} from 'react-router-dom';
import { GoogleSheetContext } from '../../contexts/GoogleSheetProvider';
import hunterdoge from '../../images/hunterdoge.png';

import {useState} from 'react';
import TabPanel from '../TabPanel';
import {SHEET_ID} from "../../constants";
import Row from "./Row";
import TabsStyled from '../Tabs/Tabs';

const tabs = [
    {label: "all-time"}
    // {label: "Today’s best"},
    // {label: "This week’s"}
]

// const ChangePart = ({setPartActive, partActive}) => (
//     <Part>
//         <Tab className={partActive === 1 ? 'active' : ''} onClick={() => setPartActive(1)}>
//             <span>all-time</span>
//         </Tab>
//         <Tab className={partActive === 2 ? 'active' : ''} onClick={() => setPartActive(2)}>
//             <span>Today’s best</span>
//         </Tab>
//         <Tab className={partActive === 3 ? 'active' : ''} onClick={() => setPartActive(3)}>
//             <span>This week’s</span>
//         </Tab>
//     </Part>
// )

const PopularTokens = () => {
    const [value, setValue] = useState(0)
    const { data } = useContext(GoogleSheetContext)
    const [partActive, setPartActive] = useState(1)

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
            <TabsStyled setPartActive={setPartActive} partActive={partActive} data={tabs}/>
            <Box
                sx={{
                    // height: '544px',
                    // overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    borderRadius: '25px',
                    borderTopLeftRadius: 0,
                    boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
                    border: '3px solid #FFF3D4'
                }}
            >
                <TableContainer sx={{overflow: 'visible'}}>
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
                                {data.map((row, index) => <Row key={index * 10} index={index} data={row}/>)}
                            </TabPanel>
                            
                            <TabPanel value={value} index={1}>
                                {filterWeek.map((row, index) => <Row key={index * 11} index={index} data={row}/>)}
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                {filterOneDay.map((row, index) => <Row key={index * 9} index={index} data={row}/>)}
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

