import { useContext, useState } from 'react';
import { Box, width } from '@mui/system';
import { Button, Stack, Input, MenuItem, Typography } from '@mui/material';

import hunterdogeSearch from '../../images/hunterdoge_search.png';

import SearchInput from '../searchInput';
import SelectForm from '../selectForm';
import ButtonCheckbox from '../buttonCheckbox';
import { SHEET_ID_PRESALES } from "../../constants";
import { useGoogleSheet } from '../../hooks/useGoogleSheet';

import { Context } from '../../hooks/context';


const marketCap = [
  { value: '', label: 'Market Cap' },
  { value: 10, label: '1.Market Cap' },
  { value: 20, label: '2.Market Cap' },
  { value: 30, label: '3.Market Cap' },
]
const descending = [
  { value: '', label: 'Descending' },
  { value: 10, label: '1.Descending' },
  { value: 20, label: '2.Descending' },
  { value: 30, label: '3.Descending' },
]

const projects = [
  { value: '', label: 'Liq./Mcap-Ratio' },
  { value: 10, label: '1.Liq./Mcap-Ratio' },
  { value: 20, label: '2.Liq./Mcap-Ratio' },
  { value: 30, label: '3.Liq./Mcap-Ratio' },
]

const highestList = [
  { value: '', label: 'Highest first' },
  { value: 10, label: '1.Highest first' },
  { value: 20, label: '2.Highest first' },
  { value: 30, label: '3.Highest first' },
]
const SearchOrFilter = () => {
  const { data } = useGoogleSheet(SHEET_ID_PRESALES)

  const context = useContext(Context)

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')
  const [project, setProject] = useState('')
  const [highest, setHighest] = useState('')
  const [securityAudit, setSecurityAudit] = useState(false)
  const [doxxedTeam, setDoxxedTeam] = useState(false)
  const [useCase, setUseCase] = useState(false)
  const [memeCoin, setMemeCoin] = useState(false)

  const startSearch = () => {
    context.setSearchOption({
      id: (new Date).valueOf(),
      filter: filter,
      sort: sort,
      securityAudit: securityAudit,
      doxxedTeam: doxxedTeam,
      useCase: useCase,
      memeCoin: memeCoin,
    })
  }

  return (
    <Box
      sx={{

        display: 'flex',
        flexWrap: 'wrap',
        width: '1037px',
        justifyContent: 'center',
        // textAlign: 'start'
      }}>
      <Box component='h2' sx={{ fontSize: '44px', ml: 2 }}>
        Search or filter your tokens
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '1043px',
          backgroundColor: '#FAF0CB',
          borderRadius: '25px',
          boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          mt: '19px',
          // mr: 7,
          py: '21px',
          pl: '22px',
          pr: '18px'
        }}
      >

        <Stack direction="row"
          sx={{
            mb: 2,
            mx: 'auto',
            width: '417px'
          }}>
          <SearchInput value={search} setValue={setSearch} mr={'11px'} padding={'0 5px 0 15px'} />
        </Stack>
        <Stack direction="row" alignItems="end" gap="13px">
          <SelectForm label="Filter tokens by:">
            {
              marketCap.map((item, key) => {
                return (
                  <MenuItem
                    onClick={() => setFilter(item.value)}
                    value={item.value}
                    key={key}
                    sx={{ backgroundColor: (item.value == filter ? '#FAF0CB' : 'unset') }}
                  >
                    {item.label}
                  </MenuItem>
                )
              })
            }
          </SelectForm>
          <SelectForm label="Sort tokens by:">
            {
              descending.map((item, key) => {
                return (
                  <MenuItem
                    onClick={() => setSort(item.value)}
                    value={item.value}
                    key={key}
                    sx={{ backgroundColor: (item.value == sort ? '#FAF0CB' : 'unset') }}
                  >
                    {item.label}
                  </MenuItem>
                )
              })
            }
          </SelectForm>
          <SelectForm label="Display projects with:">
            {
              projects.map((item, key) => {
                return (
                  <MenuItem
                    onClick={() => setProject(item.value)}
                    value={item.value}
                    key={key}
                    sx={{ backgroundColor: (item.value == project ? '#FAF0CB' : 'unset') }}
                  >
                    {item.label}
                  </MenuItem>
                )
              })
            }
          </SelectForm>
          <Typography>of</Typography>
          <Input value={70} inputProps={{ sx: { textAlign: 'center !important' } }}></Input>
          <Typography sx={{ whiteSpace: 'nowrap' }}>% end</Typography>
          <SelectForm>
            {
              highestList.map((item, key) => {
                return (
                  <MenuItem
                    onClick={() => setHighest(item.value)}
                    value={item.value}
                    key={key}
                    sx={{ backgroundColor: (item.value == highest ? '#FAF0CB' : 'unset') }}
                  >
                    {item.label}
                  </MenuItem>
                )
              })
            }
          </SelectForm>
        </Stack>
        <Stack direction="row" alignItems="end" gap="13px">
          <Typography sx={{ mx: 'auto', mt: '10px' }}>Show only tokens with:</Typography>
        </Stack>
        <Stack direction="row" alignItems="start" gap="13px">
          <ButtonCheckbox mr='15px' active={securityAudit} setActive={setSecurityAudit}>
            Security Audit
          </ButtonCheckbox>
          <ButtonCheckbox mr='15px' active={useCase} setActive={setUseCase}>
            Usecase
          </ButtonCheckbox>
          <ButtonCheckbox mr='15px' active={doxxedTeam} setActive={setDoxxedTeam}>
            Doxxed Team
          </ButtonCheckbox>
          <ButtonCheckbox mr='15px' active={memeCoin} setActive={setMemeCoin}>
            Memecoin
          </ButtonCheckbox>
          <Box component="img" src={hunterdogeSearch} />
        </Stack>
        <Button sx={{ px: '40px' }} onClick={startSearch}>
          SEARCH
        </Button>
      </Box>
    </Box>
  )
}


export default SearchOrFilter;