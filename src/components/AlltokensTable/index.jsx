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
    Tabs
} from '@material-ui/core';
import {Box} from '@mui/system';
import close from '../../images/close_ico.svg';
import info from '../../images/info_ico.svg';

import {useGoogleSheet} from '../../hooks/useGoogleSheet';
import React, {useEffect, useState} from 'react';
import TabPanel from '../TabPanel'
import Pagination from '../pagination/Pagination';
import CheckboxShow from '../checkboxShow';
import {SHEET_ID} from "../../constants";
import Row from "./Row";
import {Link} from "react-router-dom";
import TabsStyled from '../Tabs/Tabs';
import {paginate} from "../pagination/paginate";
import GoTop from '../GoTop';

const tabs = [
    "All time"
]
// const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]

const AllTokensTable = () => {
    const [value, setValue] = useState(0)
    const {data} = useGoogleSheet(SHEET_ID, 60000)
    const [partActive, setPartActive] = useState(1)
    //checkbox and pagination button
    const [perPage, setPerPage] = useState(25)
    const [page, setPage] = useState(1)
    //paginate
    const res = paginate(data.length, page, perPage, data)
    const {newData, currentPage, endPage} = res

    // const filterOneDay = data.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (24*60*60*1000))
    // const filterWeek = data.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (7*24*60*60*1000))

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const backToTop = () => console.log('back')

    return (
        <Box sx={{mt: 4, width: '1426px', textAlign: 'center', position: 'relative'}}>
            <Tabs
                value={value} onChange={handleChange} aria-label="sort"
            >
                {/* <Tab label="Search 1" sx={{position: 'relative', width: 224}}
        icon={<Box component="img" src={close}
        onClick={() => closeTab()}
        sx={{
          position: 'absolute',
          right: '10px',
          top: '18px'
        }}
      />}>
        </Tab> */}
                {/*<Tab label="Today’s best" sx={{width: 224}}></Tab>*/}
                {/*<Tab label="This week’s" sx={{width: 224}}></Tab>*/}
                <TabsStyled setPartActive={setPartActive} partActive={partActive} data={tabs}/>
            </Tabs>
            <Box
                sx={{
                    // height: '544px',
                    // overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    borderRadius: '25px',
                    borderTopLeftRadius: 0,
                    boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
                    border: '3px solid #FFF3D4',
                    position: 'relative'
                }}
            >
                <Box component="img" src={info}
                     sx={{
                         position: 'absolute',
                         right: '14px',
                         top: '11px'
                     }}
                />
                <TableContainer sx={{overflowX: 'visible'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#Rank</TableCell>
                                <TableCell sx={{textAlign: 'left'}}>name</TableCell>
                                <TableCell>Ticker</TableCell>
                                <TableCell>MCAP</TableCell>
                                <TableCell sx={{width: '145px'}}>Price</TableCell>
                                <TableCell>Liq / Mcap<br/> Ratio</TableCell>
                                <TableCell>holders</TableCell>
                                <TableCell sx={{fontSize: '16px', width: '142px'}}>&Oslash; holder<br/>growth per day</TableCell>
                                <TableCell sx={{textAlign: 'left'}}>Votes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* <TabPanel value={value} index={0}>
                {data.map((row, index) => <Row key={index} index={index} data={row}/>)}
            </TabPanel> */}
                            <TabPanel value={value} index={0}>
                                {newData.map((row, index) => <Row key={index * 24} index={index} data={row}/>)}
                            </TabPanel>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Stack direction="row" justifyContent="start" sx={{mt: 3, px: 2}}>
                <CheckboxShow handler={setPerPage}/>
                <Pagination start={currentPage} end={endPage} pageHandler={setPage} page={page}/>
                {/* <GoTop/> */}
                {/* <Button variant="transparent" sx={{ml: '380px'}}
                        onClick={() => backToTop()}>
                    go back top
                </Button> */}
            </Stack>
        </Box>
    )
}

export default AllTokensTable;