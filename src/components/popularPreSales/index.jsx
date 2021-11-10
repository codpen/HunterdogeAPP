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
    Tabs,
    Typography
} from '@material-ui/core';
import {Box} from '@mui/system';
import logo from '../../images/hunter_logo.png';
import {ButtonGreen, ButtonRed, ButtonYellow, More, VoteWrapper} from '../common'
import {SHEET_ID_PRESALES} from "../../constants";
import {useGoogleSheet} from '../../hooks/useGoogleSheet';


const PopularPreSales = () => {
  const {data} = useGoogleSheet(SHEET_ID_PRESALES)

  
  return (
    <Box sx={{mt: '55px', width: '100%', textAlign: 'center'}}>
      <Box component='h2' sx={{fontSize: '60px', mb: 3}}>
        Most popular pre-sales
      </Box>
      <Tabs>
        <Tab label="Today’s best"></Tab>
        {/* <Tab label="upcoming"></Tab>
        <Tab label="ended"></Tab> */}
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
                <TableCell sx={{textAlign: 'left'}}>name</TableCell>
                <TableCell>Ticker</TableCell>
                <TableCell sx={{textAlign: 'left'}}>Caps</TableCell>
                <TableCell sx={{textAlign: 'left'}}>Limits</TableCell>
                <TableCell sx={{textAlign: 'left'}}>Votes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {data?.map((row, index) => {
                return(
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Stack direction="row" alignItems="center" >
                      <Typography variant="h6" sx={{mr:'36px'}}>
                        {index+1}.
                      </Typography>
                      <Box component="img" src={logo} sx={{width: '66px'}}/>
                      </Stack>
                    </TableCell>
                    <TableCell >
                      <Stack sx={{textAlign: 'left'}}>
                        <Typography variant="h5">
                          {row.Project_Name}
                        </Typography>
                        <Typography variant="body2"
                          sx={{
                            fontSize: 12,
                            fontWeight: 300,
                            mt: '5px',
                            mb: '10px'
                          }}
                        >
                          (Sale ID: 103432)
                        </Typography>
                        <Typography variant="body1"
                          sx={{fontSize: 12}}
                        >
                          Start Time: 5:00 PM - 17 SEPT
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell >
                      <Typography variant="h6" sx={{fontWeight: 900}}>
                        {row.Project_Symbol}
                      </Typography>
                    </TableCell>
                    <TableCell >
                      <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body1">
                        SOFT
                      </Typography>
                      <Typography variant="body1" sx={{fontWeight: 500}}>
                        1500 BNB
                      </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body1">
                        HARD
                      </Typography>
                      <Typography variant="body1" sx={{fontWeight: 500}}>
                        3000 BNB
                      </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell >
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body1">
                          MIN.
                        </Typography>
                        <Typography variant="body1" sx={{fontWeight: 500}}>
                          0.1 BNB
                        </Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body1">
                          MAX.
                        </Typography>
                        <Typography variant="body1" sx={{fontWeight: 500}}>
                          5.0 BNB
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell >
                      <Stack direction="row" alignItems="center">
                        <Typography variant="table">
                          156’093
                        </Typography>
                          <VoteWrapper>
                              <ButtonRed height={'22px'} weight={'700'} size={'12px'}>
                                  VOTE - 1
                              </ButtonRed>
                              <ButtonYellow height={'22px'} weight={'700'}  size={'12px'}>
                                  VOTE + 2
                              </ButtonYellow>
                              <ButtonGreen height={'22px'} weight={'700'}  size={'12px'}>
                                  VOTE + 1
                              </ButtonGreen>
                          </VoteWrapper>
                          <More>...</More>
                        {/*<Button sx={{ml: '33px', mr: 2}}>*/}
                        {/*  VOTE*/}
                        {/*</Button>*/}
                        {/*<Button variant="more">...</Button>*/}
                      </Stack>
                    </TableCell>            
                  </TableRow>
                )
              })}
            
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Button sx={{mt: 5, minWidth: '187px'}}>
        see all pre-sales
      </Button>
    </Box>
  )
}

export default PopularPreSales;