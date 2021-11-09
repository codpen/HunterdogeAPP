import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from 'styled-components'

import logo from '../../images/hunter_logo.png';
import chart from '../../images/chart_ico.svg';
import ConnectMetaMask from '../../connection/ConnectMetaMask'

const AdsToken = () => (
  <Stack direction="row"
      sx={{
      pt: '21px',
      pl: '51px',
      pr: '13px',
      position: 'relative',
      borderRight: '3px solid #FFFBE2',
    }}
  >
    <Typography
      sx={{
        position: 'absolute',
        top: 0,
        left: '6%',
        fontFamily: 'ArmagedaWide',
        fontSize: 23,
        color: 'rgba(171, 136, 46, 0.7)',
      }}
    >
      #2
    </Typography>
    <Box component='img' src={logo}
      sx={{
        height: '68px',
        width: '68px',
        mr: '12px'
      }}
    />
    <Box>
      <Typography variant='h4'>
        $hunt  | HunterDoge
      </Typography>
      <Box
        sx={{
          width: '152px',
          mt: 1
        }}
      >
        <Stack direction="row" justifyContent="space-between"
          sx={{mb: '8px'}}
        >
          <Typography variant="body2">
            Price changes (24h)
          </Typography>
          <Typography variant="body2"
            sx={{fontWeight: 700}}
          >
          +106.54%
          </Typography> 
        </Stack>
        <Stack direction="row" justifyContent="space-between"
          sx={{mb: '8px'}}
        >
          <Typography variant="body2">
            Votes last 24h
          </Typography>
          <Typography variant="body2"
            sx={{fontWeight: 700}}
          >
            +1’034
          </Typography> 
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">
            Votes last 72h
          </Typography>
          <Typography variant="body2"
            sx={{fontWeight: 700}}
          >
            +5’555
          </Typography> 
        </Stack>
      </Box>
    </Box>
    <Typography
      sx={{
        position: 'absolute',
        top: '33%',
        right: '7%',
        fontSize: 55,
        color: '#FF0000',
        fontWeight: 900
      }}
    >
      ?
    </Typography>
  </Stack>
)

const Hero = ({setIsOpen}) => {
  return (
    <Block  
    >
      <Box>
        <Stack direction="row">
          <Box component='img' src={logo}
            sx={{
              height: '61px',
              width: '61px',
            }}/>
          <Box component='h2'
            sx={{
              fontSize: 40,
              pl: 3
            }}
          >
            HunterDoge
          </Box>
        </Stack>
        <Stack direction="row" alignItems='center'
          sx={{
            pt: '14px',
           
          }}
        >
          <Box component='img' src={chart}
              sx={{
                height: '30px',
                width: '30px',
                mr: '21px'
              }}
          />
          <Typography variant='body1'
            sx={{
              fontSize: 16,
              mr: '28px'
            }}
          >
            1 Hunt = $0.0005 
          </Typography>
          <Button>
            Buy $hunt
          </Button>
        </Stack>
      </Box>
      <Content>
        <AdsToken />
        <AdsToken />
      </Content>
      

      <Box 
        sx={{
          width: '286px',
          ml: '44px',
          pt: 1
        }}
      >
        <ConnectMetaMask setIsOpen={setIsOpen}/>
      </Box>    
      
    </Block>
  )
}

export default Hero;

const Block = styled.div`
  margin-top: 20px;
  padding: 0 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Content = styled.div`
  display: flex;
  overflow: auto;
  background: linear-gradient(270deg, rgba(250, 240, 203, 0) 0%, #FAF0CB 14.35%, #FAF0CB 83.68%, rgba(250, 240, 203, 0) 99.33%);
  filter: drop-shadow(0px 5px 0px rgba(0, 0, 0, 0.1));
`

