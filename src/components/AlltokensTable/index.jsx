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

import React, { useContext, useEffect, useState } from 'react';
import TabPanel from '../TabPanel'
import Pagination from '../pagination/Pagination';
import CheckboxShow from '../checkboxShow';
import { SHEET_ID } from "../../constants";
import Row from "./Row";
import { Link } from "react-router-dom";
import TabsStyled from '../Tabs/Tabs';
import { paginate } from "../pagination/paginate";

import { ModalContext } from '../../contexts/ModalProvider'
import { GoogleSheetContext } from '../../contexts/GoogleSheetProvider';
import { filter } from 'cheerio/lib/api/traversing';
import { data } from 'cheerio/lib/api/attributes';

import { getVotesPerProject, toChecksumAddress } from '../../connection/functions'

const fieldMap = {
  mcap: 'Project_MarketCap',
  price: 'Project_Price',
  liq: 'Project_LiqMcapRatio',
  holder: 'Project_Holder',
}

const AllTokensTable = (isTitle) => {
  const context = useContext(ModalContext)
  const [currentData, setCurrentData] = useState({ newData: [], currentPage: 0, endPage: 0 })

  let tabs = []
  let defaultOption = {}
  context.searchOption.map((item, i) => {
    tabs.push({ label: `Search ${i + 1}`, close: true, id: item.id })
  })
  tabs = [...tabs, { label: "All time", close: false }]

  const [value, setValue] = useState(0)
  const { data } = useContext(GoogleSheetContext)
  const [partActive, setPartActive] = useState(1)
  //checkbox and pagination button
  const [perPage, setPerPage] = useState(25)
  const [page, setPage] = useState(1)

  // const filterOneDay = data.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (24*60*60*1000))
  // const filterWeek = data.filter(({Project_Create}) => Date.parse(Project_Create) >= new Date() - (7*24*60*60*1000))
  const filter = () => {
    let result = [...data]
    const option = context.searchOption.filter(e => e.id == partActive)[0]
    if (option) {
      const address = option.search ? toChecksumAddress(option.search) : false
      let direct = option.direct === 'asc' ? 1 : -1;
      result = result.filter(item => {
        let projectAddress = toChecksumAddress(item?.Project_Address)
        if (address && projectAddress !== address) return false;
        if (option.memeCoin && option.memeCoin.toString().toLowerCase() != item.Project_IsMemeCoin.toLowerCase()) return false;
        if (option.securityAudit && option.securityAudit.toString().toLowerCase() != item.Project_ISKYC.toLowerCase()) return false;
        if (option.doxxedTeam && option.doxxedTeam.toString().toLowerCase() != item.Project_ISDOX.toLowerCase()) return false;
        if (option.useCase && option.useCase.toString().toLowerCase() != item.Project_HasUtility.toLowerCase()) return false;
        if (option.project == 'vote') {
          if(option.cond === 'high') {
            return getVotesPerProject(projectAddress) >= option.value
          } else {
            return getVotesPerProject(projectAddress) <= option.value
          }
        } else {
          if(option.cond === 'high') {
            return item[fieldMap[option.field]] >= option.value
          } else {
            return item[fieldMap[option.field]] <= option.value
          }
        }
        return true
      })
      result.sort((a, b) => {
        let order = 1;
        if(option.field === 'vote' && a.Project_Address && b.Project_Address) {
          order = getVotesPerProject(a.Project_Address) - getVotesPerProject(b.Project_Address)
        } else {
          order = a[fieldMap[option.field]] - b[fieldMap[option.field]]
        }

        return order * direct
      })
    }

    return result
  }
  useEffect(() => {
    let result = filter()
    const res = paginate(result.length, page, perPage, result)
    setCurrentData(res)

  }, [data, partActive, page, perPage])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const backToTop = () => console.log('back')

  const closeTab = (id) => {
    context.removeSearchOption(id)
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
                  <TableCell sx={{fontSize: '16px', width: '142px'}}>&Oslash; holder<br/>growth per day</TableCell>
                  <TableCell sx={{ textAlign: 'left' }}>Votes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* <TabPanel value={value} index={0}>
                    {data.map((row, index) => <Row key={index} index={index} data={row}/>)}
                </TabPanel> */}
                <TabPanel value={value} index={0}>
                  {currentData.newData.map((row, index) => <Row key={index} index={index} data={row} />)}
                </TabPanel>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 3, px: 2 }}>
          <CheckboxShow perPage={perPage} handleCheck={setPerPage} />
          <Pagination start={currentData.currentPage} end={currentData.endPage} pageHandler={setPage} page={page} />
          {/* <Button variant="transparent" sx={{ ml: '380px' }}
            onClick={() => backToTop()}>
            go back top
          </Button> */}
        </Stack>
      </Box>
    </Stack>
  )
}

export default AllTokensTable;