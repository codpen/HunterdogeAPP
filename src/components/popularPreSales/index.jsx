import React, {useState, useMemo} from 'react';
import {
    Button,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import styled from "styled-components";
import {Box} from '@mui/system';
import logo from '../../images/hunter_logo.png';
import {ButtonGreen, ButtonRed, ButtonYellow, More, VoteWrapper} from '../common'
import {SHEET_ID_PRESALES} from "../../constants";
import {useGoogleSheet} from '../../hooks/useGoogleSheet';
import Row from "./Row";
import TabsStyled from '../Tabs/Tabs';
import info from '../../images/info_ico.svg';
import Pagination from "../pagination/Pagination";
import {paginate} from "../pagination/paginate";


const tabs = [
    {label: "upcoming"},
    {label: "Ended"}
  ]

// const PopularPreSales = () => {
//     const {data} = useGoogleSheet(SHEET_ID_PRESALES)
//     const [partActive, setPartActive] = useState(1)
//     const [openPopup, setOpenPopup] = useState(false)
//     const [page, setPage] = useState(1)
//     // console.log(window.innerWidth)

//     const handleInfo = () => {
//         setOpenPopup(true)
//         setTimeout(function () {
//             setOpenPopup(false)
//         }, 5000);
//     }


//     const currentTime = Date.now()


const PopularPreSales = () => {
  const { data } = useGoogleSheet(SHEET_ID_PRESALES)
  const [partActive, setPartActive] = useState(1)
  const [openPopup, setOpenPopup] = useState(false)
  const [page, setPage] = useState(1)
  const handleInfo = () => {
    setOpenPopup(true)
    setTimeout(function() {
      setOpenPopup(false)
    }, 5000);
  }
//   const filterUpcoming = data?.filter(({Liq_Lock_Time}) => Liq_Lock_Time >= currentTime)
//   const filterEnded = data?.filter(({Liq_Lock_Time}) => Liq_Lock_Time <= currentTime)
    const {newData, currentPage, endPage, startIndex} = useMemo(() => {
        const currentTime = Math.round(new Date() / 1000)
        const filterUpcoming = data.filter(({Project_Start_Time}) => Project_Start_Time >= currentTime)
        const filterEnded  = data.filter(({Project_Start_Time}) => Project_Start_Time <= currentTime)
        //paginate
        const paginateData = partActive === 1 ? filterUpcoming : filterEnded
        return paginate(paginateData.length, page, 10, paginateData.reverse())
    }, [partActive, page, data])

    return (
        <Box sx={{mt: '55px', width: '100%', textAlign: 'center'}}>
            <Stack direction="row" alignItems="center" justifyContent="center" sx={{mb: 3}}>
                <Box component='h2' sx={{fontSize: '60px', mr: 4}}>
                    Most popular pre-sales
                </Box>
                <Info onClick={handleInfo}>i
                    {openPopup && <Popup>
                        <TextPopup mb={'7px'}>Automated DxSale Presale Feed</TextPopup>
                        <TextPopup color="rgba(171, 136, 46, 0.7)" fw={700}>In the table below our feed aggregates all
                            presales listed on DxSale. We do NOT control the below listed projects. Be aware and
                            DYOR!</TextPopup>
                    </Popup>}
                </Info>
            </Stack>
            <TabsStyled setPartActive={setPartActive} partActive={partActive} data={tabs}/>
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '25px',
                    borderTopLeftRadius: 0,
                    boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
                    border: '3px solid #FFF3D4'
                }}
            >
                <TableContainer sx={{overflow: 'visible'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{textAlign: 'left'}}>#Rank</TableCell>
                                <TableCell sx={{textAlign: 'left'}}
                                        style={{textAlign: 'left', paddingLeft: '0'}}>name</TableCell>
                                <TableCell>Ticker</TableCell>
                                <TableCell sx={{textAlign: 'center'}}>Caps</TableCell>
                                <TableCell sx={{textAlign: 'center'}}>Limits</TableCell>
                                <TableCell sx={{textAlign: 'left'}}></TableCell>
                                <TableCell sx={{textAlign: 'left'}}></TableCell>
                            </TableRow>
                        </TableHead>
                        {partActive === 1 ? <TableBody>
                            {newData?.map((row, index) => <Row key={index} index={startIndex + index} data={row}/>)}
                        </TableBody> : <TableBody>
                            {newData?.map((row, index) => <Row key={index} index={startIndex + index} data={row}/>)}
                        </TableBody>
                        }
                    </Table>
                </TableContainer>
            </Box>
            <Pagination style={{marginTop: '23px'}} start={currentPage} end={endPage} pageHandler={setPage} page={page}/>
            {/*<Button sx={{mt: 5, minWidth: '187px'}}>*/}
            {/*  see all pre-sales*/}
            {/*</Button>*/}
        </Box>
    )
}

export default PopularPreSales;

const Popup = styled.div`
  position: absolute;
  width: 462px;
  height: 97px;
  left: ${() => window.innerWidth < 1800 ? '-480px' : '46px'};
  top: ${() => window.innerWidth < 1800 ? '-100px' : '-20px'};
  padding: 17px 19px 17px 32px;
  background: #FFF599;
  border: 3px solid #FAF0CB;
  box-sizing: border-box;
  text-align: start;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 25px;

  &::before {
    content: '';
    position: absolute;
    top: ${() => window.innerWidth < 1800 ? '50px' : '15px'};
    left: ${() => window.innerWidth < 1800 ? '455px' : '-39px'};
    transform: ${() => window.innerWidth < 1800 ? 'rotate(180deg)' : 'rotate(0)'};
    border: 15px solid transparent;
    border-right: 25px solid #FFF599;
  }
`

const TextPopup = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: ${({fw}) => fw ? fw : 800};
  font-size: 15px;
  line-height: 15px;
  color: ${({color}) => color ? color : '#AB882E'};
  margin-bottom: ${({mb}) => mb ? mb : 0};
`

const Info = styled.div`
  cursor: pointer;
  font-family: Raleway;
  font-weight: 900;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #FFFFFF;
  background: #AB882E;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`


