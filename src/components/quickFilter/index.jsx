import { FormControl, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Button, InputAdornment, InputBase, Stack, IconButton, InputLabel } from '@mui/material';
import { useContext, useState } from 'react';


import { ReactComponent as IconSelect } from '../../images/select_ico.svg';
import ButtonCheckbox from '../buttonCheckbox';
import SelectForm from '../selectForm';
import { Context } from '../../hooks/context';

import { useHistory } from "react-router-dom";

const marketCap = [
  { value: '', label: 'Market Cap' },
  { value: 10, label: '1.Market Cap' },
  { value: 20, label: '2.Market Cap' },
  { value: 30, label: '3.Market Cap' },
]
const highestFirst = [
  { value: '', label: 'Highest first' },
  { value: 10, label: '1.Highest first' },
  { value: 20, label: '2.Highest first' },
  { value: 30, label: '3.Highest first' },
]

const QuickFilter = () => {
  const history = useHistory()

  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')
  const [securityAudit, setSecurityAudit] = useState(false)
  const [doxxedTeam, setDoxxedTeam] = useState(false)
  const [useCase, setUseCase] = useState(false)
  const [memeCoin, setMemeCoin] = useState(false)

  const context = useContext(Context)

  const search = () => {
    context.setOpenSearch(true)
    history.push('/allTokens')
  }

  return (
    <Stack
      sx={{
        padding: '18px 25px 22px 27px',
        width: '355px',
        backgroundColor: '#FAF0CB',
        borderRadius: '25px',
        boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <Typography variant='h3' sx={{ mb: '13px' }}>
        Quick Filter
      </Typography>
      <Stack sx={{ mt: '12px', mx: 'auto' }}>
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
      </Stack>
      <Stack sx={{ mt: '12px', mx: 'auto' }}>
        <SelectForm label="Sort tokens by:">
          {
            highestFirst.map((item, key) => {
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
      </Stack>
      <Typography variant='body1' sx={{ mb: '10px', mt: '18px', textAlign: 'start' }}>
        Show only tokens with:
      </Typography>
      <Stack direction="row" sx={{ mb: '14px', }}>
        <ButtonCheckbox mr='15px' active={securityAudit ? true : false} setActive={setSecurityAudit}>
          Security Audit
        </ButtonCheckbox>
        <ButtonCheckbox active={doxxedTeam ? true : false} setActive={setDoxxedTeam}>
          Doxxed Team
        </ButtonCheckbox>
      </Stack>
      <Stack direction="row" sx={{ mb: '14px', }}>
        <ButtonCheckbox mr='15px' active={useCase ? true : false} setActive={setUseCase}>
          Use Case
        </ButtonCheckbox>
        <ButtonCheckbox active={memeCoin ? true : false} setActive={setMemeCoin}>
          Memecoin
        </ButtonCheckbox>
      </Stack>
      <Button onClick={() => search()} sx={{ mt: '12px', mx: 'auto' }}>
        SEARCH
      </Button>
    </Stack>
  )
}

export default QuickFilter