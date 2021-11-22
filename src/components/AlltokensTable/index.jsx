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
import { filter } from 'cheerio/lib/api/traversing';
import { data } from 'cheerio/lib/api/attributes';


const AllTokensTable = (isTitle) => {
  const context = useContext(Context)

  let tabs = []
  let defaultOption = {}
  context.searchOption.map((item, i) => {
    tabs.push({ label: `Search ${i + 1}`, close: true, id: item.id })
  })
  tabs = [...tabs, { label: "All time", close: false }]

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
  }

  const filter = (data, optId) => {
    const option = context.searchOption.filter(e=>e.id == optId)[0]
    let result = data.filter(item=> {
      if(option.memeCoin && option.memeCoin.toString().toLowerCase() != item.Memecoin.toLowerCase()) return false;
      if(option.securityAudit && option.securityAudit.toString().toLowerCase() != item.Audit.toLowerCase()) return false;
      if(option.doxxedTeam && option.doxxedTeam.toString().toLowerCase() != item.KYC.toLowerCase()) return false;
      if(option.useCase && option.useCase.toString().toLowerCase() != item.Utility.toLowerCase()) return false;
      return true
    })
    return result;
  }

  const vote = () => console.log('vote')

  return (
    <Stack direction="row" alignItems="center" sx={{ gap: 8, width: '100%' }}>
      <Box sx={{ mt: 4, textAlign: 'center', position: 'relative' }}>
        <Tabs
          value={value} onChange={handleChange} aria-label="sort"
        >
          <TabsStyled setPartActive={setPartActive} partActive={partActive} data={tabs} closeTab={closeTab} />
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
                {
                  tabs.map((tab, i)=>{
                    return (
                      <TabPanel key={i} value={value} index={0}>
                        {(tab.id ? filter(data, tab.id) : data).map((row, index) => <Row key={index} index={index} data={row} />)}
                      </TabPanel>
                    )
                  })
                }
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