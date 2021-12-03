import React, { useContext, useMemo } from 'react';
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
import useMediaQuery from '@material-ui/core/useMediaQuery';

const tabs = [
    {label: "all-time"},
    {label: "Today’s best"},
    {label: "This week’s"}
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
    const mobileMatches = useMediaQuery('(min-width:600px)');
    const [value, setValue] = useState(0)
    const { data } = useContext(GoogleSheetContext)
    const [partActive, setPartActive] = useState(1)

    const {filterOneDay, filterWeek} = useMemo(() => {
        const getWeekNumber = (date) => {
            date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
            date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay()||7));
            var yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
            var weekNo = Math.ceil(( ( (date - yearStart) / 86400000) + 1)/7);
            return weekNo;
        }
        
        const filterOneDay = data.filter(({Project_Token_LaunchDate}) => Date.parse(Project_Token_LaunchDate) >= new Date() - (24 * 60 * 60 * 1000))
        const filterWeek = data.filter(({Project_Token_LaunchDate}) => Date.parse(Project_Token_LaunchDate) >= new Date() - (7 * 24 * 60 * 60 * 1000))
        return { filterOneDay, filterWeek }
    }, [data])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{mt: '30px', width: '100%', textAlign: 'center', position: 'relative'}}>
            {mobileMatches &&
            <Box component="img" src={hunterdoge}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '2%'
                }}
            />
            }
            
            <Box component='h2' sx={{fontSize: mobileMatches ? '60px': '30px', mb: 3}}>
                Most popular Tokens
            </Box>
            <TabsStyled setPartActive={setPartActive} partActive={partActive} data={tabs}/>
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '25px',
                    borderTopLeftRadius: 0,
                    boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
                    border: '3px solid #FFF3D4',
                    overflow: 'hidden'
                }}
            >
                <TableContainer sx={{overflow: 'visible'}}>
                    <Table responsive>
                        <TableHead>
                            <TableRow>
                                {mobileMatches && <TableCell>#Rank</TableCell>}
                                <TableCell sx={{textAlign: 'left', fontSize: mobileMatches? '20px': '10px'}}>name</TableCell>
                                <TableCell sx={{fontSize: mobileMatches? '20px': '10px'}}>Ticker</TableCell>
                                <TableCell sx={{fontSize: mobileMatches? '20px': '10px'}}>MCAP</TableCell>
                                <TableCell sx={{fontSize: mobileMatches? '20px': '10px'}}>Price</TableCell>
                                <TableCell sx={{textAlign: 'left', fontSize: mobileMatches? '20px': '10px'}}>Votes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{overflow: 'hidden'}}>
                            <TabPanel value={value} index={0}>
                                {partActive === 1 && data.map((row, index) => <Row key={index * 10} index={index} data={row}/>)}
                                {partActive === 2 && filterOneDay.map((row, index) => <Row key={index * 9} index={index} data={row}/>)}
                                {partActive === 3 && filterWeek.map((row, index) => <Row key={index * 11} index={index} data={row}/>)}
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

