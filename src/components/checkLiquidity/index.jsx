import { Typography } from '@material-ui/core';
import { Button, Stack, CircularProgress } from '@mui/material';
import { Box, width } from '@mui/system';

import { ReactComponent as IconComponent } from '../../images/loupe_ico.svg';
import logo from '../../images/hunter_logo.png';
import SearchInput from '../searchInput'
import { useContext, useEffect, useState } from 'react';
import { getPair, getBalanceWBNB, getBalanceToken, isHoneypot, toChecksumAddress } from '../../connection/functions'
import { useGoogleSheet } from '../../hooks/useGoogleSheet';
import { usePrice } from '../../hooks/usePrice';
import { SHEET_ID } from "../../constants";
import { bscWBNBContact } from '../../connection/contracts';
import { Context } from '../../hooks/context';

const CheckLiguidity = () => {
  const context = useContext(Context)
  const bnbPrice = usePrice(bscWBNBContact)
  const [getMoreInfo, setGetMoreInfo] = useState(false)
  const [spin, setSpin] = useState(false)
  const [pairAddress, setPairAddress] = useState('')

  const [project, setProject] = useState({
    wbnb: 0,
    token: 0,
    price: 0,
    symbol: '',
    wbnb: '',
    honey: '',
    buy_tax: 0,
    sell_tax: 0,
  })

  const checkSumAddress = (addr) => {
    const callAsync = async () => {
      setSpin(true)
      try {
        if (!addr) {
          setProject({
            wbnb: 0,
            token: 0,
            price: 0,
            symbol: '',
            wbnb: '',
            honey: '',
            buy_tax: 0,
            sell_tax: 0,
          })
          return false
        }
        const address = toChecksumAddress(addr)

        const pair = await getPair(address);
        setPairAddress(pair)

        project.wbnb = await getBalanceWBNB(pair);
        project.token = await getBalanceToken(pair, address);

        const honey = await isHoneypot(address)
        project.honey = honey.is
        project.buy_tax = honey.buy_tax
        project.sell_tax = honey.sell_tax

        fetch(`https://api.pancakeswap.info/api/v2/tokens/${address}`)
          .then((response) => {
            return response.json();
          })
          .then((res) => {
            project.price = project.wbnb * res.data.price_BNB
            project.name = res.data.name
            project.symbol = res.data.symbol
            project.totalLP = project.wbnb * bnbPrice.price
            setProject(project)
            setSpin(false)
          }).catch(e => {
            setSpin(false)
            console.log(e)
          });
      } catch (e) {
        setSpin(false)
        console.log(e)
      }
    }
    callAsync()
  }


  useEffect(() => {
    if (bnbPrice.price) {
      project.totalLP = project.wbnb * bnbPrice.price
      setProject(project)
    }
  }, [bnbPrice])

  const goToDexTool = () => {
    if (!pairAddress) return false
    window.location.href = `https://www.dextools.io/app/bsc/pair-explorer/${pairAddress}`
  }

  const handleGetMoreInfo = () => {
    // history.push('/token/0x04F73A09e2eb410205BE256054794fB452f0D245')
    setGetMoreInfo(true)
  }

  const formartNumber = (value) => {
    return value.toLocaleString().replace(/,/g, "'")
  }

  return (
    <Box
      sx={{
        width: '612px',
        backgroundColor: '#FAF0CB',
        borderRadius: '25px',
        boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        mr: 7,
        py: '19px',
        px: '20px'
      }}
    >
      <Typography variant='h3'>
        Check liquidity
      </Typography>
      <Stack direction="row" sx={{ mt: 2, mb: 2 }}>
        <SearchInput
          setValue={checkSumAddress}
          padding={'0 5px 0 15px'}
          mr={2}
        />
      </Stack>
      <Stack direction="row"
        sx={{
          backgroundColor: '#fff',
          border: '2px solid #B78300',
          borderRadius: '25px',
          px: '23px',
          pt: '13px',
          pb: '18px'
        }}
      >
        <Stack sx={{ width: '100%', height: '220px' }}>
          {
            !project.totalLP
              ?
              <Typography variant="h4"
                sx={{ fontSize: 25, m: 'auto' }}
              >
                CONNECT YOUR WALLET TO SEARCH FOR ANY BSC TOKEN
              </Typography>
              :
              <>
                <Stack direction="row" justifyContent="space-between" alignItems="center"
                  sx={{
                    mb: '8px',
                    pb: 1,
                    borderBottom: '1px solid #AB882E'
                  }}
                >
                  <Typography variant="h4"
                    sx={{ fontSize: 17 }}
                  >
                    {project.name}
                  </Typography>
                  <Typography variant="body2"
                    sx={{
                      fontSize: 12
                    }}
                  >
                    ${project.symbol}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center"
                  sx={{
                    mb: 1.5
                  }}
                >
                  <Typography variant="body1"
                    sx={{ fontWeight: 500 }}
                  >
                    Total Liquidity
                  </Typography>
                  <Typography variant="body1">
                    ${formartNumber(project.totalLP)}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center"
                  sx={{
                    mb: 1.5
                  }}
                >
                  <Typography variant="body1"
                    sx={{ fontWeight: 500 }}
                  >
                    Pooled WBNB
                  </Typography>
                  <Typography variant="body1">
                    {formartNumber(project.wbnb * 1)}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center"
                  sx={{
                    mb: 1.5
                  }}
                >
                  <Typography variant="body1"
                    sx={{ fontWeight: 500 }}
                  >
                    Pooled {project.name}
                  </Typography>
                  <Typography variant="body1">
                    {formartNumber(project.token)}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center"
                  sx={{
                    mb: 1.5
                  }}
                >
                  <Typography variant="body1"
                    sx={{ fontWeight: 500 }}
                  >
                    Honeypot?
                  </Typography>
                  <Typography variant="body1">
                    {project.honey}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center"
                  sx={{
                    mb: 1.5
                  }}
                >
                  <Typography variant="body1"
                    sx={{ fontWeight: 500 }}
                  >
                    Buy / Sell taxes
                  </Typography>
                  <Typography variant="body1">
                    {project.buy_tax}% / {project.sell_tax}%
                  </Typography>
                </Stack>
              </>
          }
        </Stack>
      </Stack>
      <Stack>
        {
          pairAddress
            ?
            <Button onClick={goToDexTool} sx={{ mt: '12px', mx: 'auto' }}>
              SHOW ON DEXTOOLS
            </Button>
            :
            <Button onClick={handleGetMoreInfo} sx={{ mt: '12px', mx: 'auto' }}>
              GET MORE INFO
            </Button>
        }
      </Stack>

      {
        spin &&
        <Box sx={{ position: 'fixed', top: '0px', left: '0px', width: '100%', height: '100%', backgroundColor: '#4033117d', zIndex: 9 }}>
          <CircularProgress sx={{ position: 'fixed', top: '50%', left: '50%' }} />
        </Box>
      }
    </Box>
  )
}

export default CheckLiguidity;