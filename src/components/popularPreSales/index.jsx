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
import Row from "./Row";


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
            {data?.map((row, index) => <Row key={index} index={index} data={row}/>)}
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