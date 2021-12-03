import { FormControl, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Button, InputAdornment, InputBase, Stack, IconButton, InputLabel } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ReactComponent as IconSelect } from '../../images/select_ico.svg';
import ButtonCheckbox from '../buttonCheckbox';
import SelectForm from '../selectForm';
import { ModalContext } from '../../contexts/ModalProvider';
import { useHistory } from "react-router-dom";

const marketCap = [
  { value: 'mcap', label: 'Market Cap' },
  { value: 'price', label: 'Price ' },
  { value: 'liq', label: 'Liq./Mcap-Ratio' },
  { value: 'holder', label: 'Holders' },
  { value: 'vote', label: 'Votes' },
]
const highestFirst = [
  { value: 'high', label: 'Highest first' },
  { value: 'low', label: 'Lowest first' },
]

const QuickFilter = () => {
  const history = useHistory()
  const mobileMatches = useMediaQuery('(min-width:600px)');
  const [filter, setFilter] = useState('vote')
  const [sort, setSort] = useState('high')
  const [securityAudit, setSecurityAudit] = useState(false)
  const [doxxedTeam, setDoxxedTeam] = useState(false)
  const [useCase, setUseCase] = useState(false)
  const [memeCoin, setMemeCoin] = useState(false)

  const context = useContext(ModalContext)

  const search = () => {
    history.push('/allTokens')
  }

  // useEffect(()=>{
  //   context.setSearchOption({
  //     id: 'default',
  //     filter: filter,
  //     sort: sort,
  //     securityAudit: securityAudit,
  //     doxxedTeam: doxxedTeam,
  //     useCase: useCase,
  //     memeCoin: memeCoin,
  //   })
  // }, [filter, sort, securityAudit, doxxedTeam, useCase, memeCoin])

  return (
    <div>
      <Stack
        sx={{
          padding: '18px 25px 22px 27px',
          width: !mobileMatches ? 'auto': '355px',
          backgroundColor: '#FAF0CB',
          borderRadius: '25px',
          boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          mx: !mobileMatches ? '10px': '0'
        }}
      >
        <Typography variant='h3' sx={{ mb: '13px' }}>
          Quick Filter
        </Typography>
        <Stack sx={{ mt: '12px', mx: 'auto' }}>
          <SelectForm label="Filter tokens by:" defaultValue={filter}>
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
          <SelectForm label="Sort tokens by:" defaultValue={sort}>
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
        <Typography variant='body1' sx={{ mb: '10px', mt: '20px', textAlign: 'center' }}>
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
    </div>
  )
}

export default QuickFilter