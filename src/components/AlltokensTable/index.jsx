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
import { Box } from '@mui/system';
import close from '../../images/close_ico.svg';
import info from '../../images/info_ico.svg';

import { useGoogleSheet } from '../../hooks/useGoogleSheet';
import React, { useContext, useEffect, useState } from 'react';
import TabPanel from '../TabPanel'
import Pagination from '../pagination/Pagination';
import CheckboxShow from '../checkboxShow';
import { SHEET_ID } from "../../constants";
import Row from "./Row";
import { Link } from "react-router-dom";
import TabsStyled from '../Tabs/Tabs';

import { Context } from '../../hooks/context';


const AllTokensTable = (isTitle) => {
  const context = useContext(Context)

  const tabs = [
    "All time"
  ]

  const [value, setValue] = useState(0)
  const { data } = useGoogleSheet(SHEET_ID, 60000)

  const [partActive, setPartActive] = useState(1)

  // const filterOneDay = data.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (24*60*60*1000))
  // const filterWeek = data.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (7*24*60*60*1000))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [limit, setLimit] = useState(25)
  const [page, setPage] = useState(1)

  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    setTotalPage(data.length % limit == 0 ? parseInt(data.length / limit) : parseInt(data.length / limit) + 1)
    setPage(1)
  }, [limit, data])

  const backToTop = () => console.log('back')

  const closeTab = (id) => {
    context.removeSearchOption(id)
    console.log(context.searchOption)
  }

  const vote = () => console.log('vote')

  return (
    <Stack direction="row" alignItems="center" sx={{ gap: 8, width: '100%' }}>
      <Box sx={{ mt: 4, textAlign: 'center', position: 'relative' }}>
        <Tabs
          value={value} onChange={handleChange} aria-label="sort"
        >
          {context.searchOption.map((item, i) => {
            return (
              <Tab
                label={`search ${(i + 1)}`}
                sx={{ position: 'relative', width: 224 }}
                icon={
                  <Box component="img"
                    src={close}
                    onClick={() => closeTab(item.id)}
                    sx={{
                      position: 'absolute',
                      right: '10px',
                      top: '18px'
                    }}
                  />}
              />
            )
          })}
          {/* <Tab label="Search 1" sx={{position: 'relative', width: 224}}
            icon={<Box component="img" src={close}
            onClick={() => closeTab()}
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
          <TabsStyled setPartActive={setPartActive} partActive={partActive} data={tabs} />
        </Tabs>
        <Box
          sx={{
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
                  <TableCell sx={{ textAlign: 'left' }}>name</TableCell>
                  <TableCell>Ticker</TableCell>
                  <TableCell>MCAP</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Liq / Mcap<br /> Ratio</TableCell>
                  <TableCell>holders</TableCell>
                  <TableCell>Popularity</TableCell>
                  <TableCell sx={{ textAlign: 'left' }}>Votes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* <TabPanel value={value} index={0}>
                    {data.map((row, index) => <Row key={index} index={index} data={row}/>)}
                </TabPanel> */}
                <TabPanel value={value} index={0}>
                  {data.map((row, index) => <Row key={index} index={index} data={row} />)}
                </TabPanel>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 3, px: 2 }}>
          <CheckboxShow limit={limit} handleCheck={setLimit} />
          <Pagination pos={page} count={totalPage} setPage={setPage} />
          <Button variant="transparent" sx={{ ml: '380px' }}
            onClick={() => backToTop()}>
            go back top
          </Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default AllTokensTable;