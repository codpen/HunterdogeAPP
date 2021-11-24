import { useState, useEffect } from 'react';
import {Collapse, Stack, TableCell, TableRow, Typography, Table} from "@material-ui/core";
import {Box} from "@mui/system";
import logo from "../../images/hunter_logo.png";
import {Button, Flex, LinkWrapper, More} from "../common";
import {useVotesPerProject} from "../../hooks/useVotesPerProject";
import styled from "styled-components";
import {Votes} from "../common/votes";
import { CheckPopup } from '../checkPopup/checkPopup';

import Bsc from "../../images/table/bscscan.svg";
import Telegram from "../../images/table/telegram.svg";
import Twitter from "../../images/table/twitter.svg";
import Dx from "../../images/table/dx.svg";
import { TableBody, TableHead } from '@mui/material';

const Row = ({data, index}) => {
    const {votes, error, isLoading} = useVotesPerProject(data.Project_Address)
    const [additional, setAdditional] = useState(false) 

    const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const convertedDateStart = new Date(data.Project_Start_Time *1000)
    const ddStart = convertedDateStart.getDate()
    const mmStart = convertedDateStart.getMonth()
    const yyyyStart = convertedDateStart.getFullYear()
 
    const timeFormatStart = convertedDateStart.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

    const convertedDateLock = new Date(data.Liq_Lock_Time *1000)
    const ddLock = convertedDateLock.getDate()
    const mmLock = convertedDateLock.getMonth()
    const yyyyLock = convertedDateLock.getFullYear()
    const timeFormatLock = convertedDateLock.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

    return (
      <>
        <TableRow>
            <TableCell component="th" scope="row" style={{ width: '140px'}}>
                <Stack direction="row" alignItems="center" >
                    <Typography variant="h6" sx={{mr:'36px'}}>
                        {index+1}.
                    </Typography>
                    <Box component="img" src={data.Project_Logo} sx={{width: '66px'}}/>
                </Stack>
            </TableCell>
            <TableCell style={{ padding: '6px 0px 6px 6px', width: '140px'}}>
                <LinkWrapper to={`/token/${data.Project_Address}`}>
                <Stack sx={{textAlign: 'left'}}>
                    <Typography variant="h5">
                        {data.Project_Name}
                    </Typography>
                    {/* <Typography variant="body2"
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
                        Start Time: {time} - {dayStart} - {mL[monthStart - 1]}
                    </Typography> */}
                </Stack>
                </LinkWrapper>
            </TableCell>
            <TableCell style={{ padding: '6px 6px'}}>
                <Typography variant="h6" sx={{fontWeight: 900}}>
                    {data.Project_Symbol}
                </Typography>
            </TableCell>
            <TableCell style={{ padding: '6px 6px'}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1">
                        SOFT 
                    </Typography>
                    <Typography variant="body1" sx={{fontWeight: 500}}>
                        {data.Soft_Cap} BNB
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1">
                        HARD
                    </Typography>
                    <Typography variant="body1" sx={{fontWeight: 500}}>
                        {data.Hard_Cap} BNB
                    </Typography>
                </Stack>
            </TableCell>
            <TableCell style={{ padding: '6px 6px'}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1">
                        MIN.
                    </Typography>
                    <Typography variant="body1" sx={{fontWeight: 500}}>
                        {data.Min_Contribution} BNB
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1">
                        MAX.
                    </Typography>
                    <Typography variant="body1" sx={{fontWeight: 500}}>
                        {data.Max_Contribution} BNB
                    </Typography>
                </Stack>
            </TableCell>
            <TableCell style={{ padding: '6px', width: '140px'}}>
                <Stack direction="row" alignItems="center">
                      <SocialWrapper>
                        <LinkStyled href={`https://bscscan.com/address/${data.Contract_Address}`} target="_blank"><Image src={Bsc} width={'22px'}/></LinkStyled>
                        <LinkStyled href={data.Project_Telegram} target="_blank"><Image src={Telegram} width={'18px'}/></LinkStyled>
                        <LinkStyled href={data.Project_Twitter} target="_blank"><Image src={Twitter} width={'19px'}/></LinkStyled>
                        <LinkStyled href={data.Presale_Link} target="_blank"><Image src={Dx} width={'22px'}/></LinkStyled>
                    </SocialWrapper>
                    <Typography variant="table" sx={{width: '50px'}}>
                        {/* {votes} */}
                    </Typography>
                    <Button size={'10px'} width={'70px'} height={'25px'} target="_blank" onClick={() => window.open(data.Project_Website)}>Website</Button>
                    {!additional && <DoubleArr onClick={() => setAdditional(true)}>&gt;&gt;</DoubleArr>}
                    
                    {/* <Votes address={data.Project_Address}/> */}
                    {/* <More onClick={() => setIsOpen(!isOpen)}>...
                        {isOpen && <CheckPopup setIsOpen={setIsOpen}/>}
                    </More> */}
                </Stack>
                
            </TableCell>
            
        </TableRow>
        <TableRow sx={{ background: 'rgba(250, 239, 195, 0.25)'}}>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={additional}>
              <CollapseWrapper style={{ height: '48px' }}>
                  <TextRow style={{ fontWeight: 900, fontSize: '17px' }}>START</TextRow>
                  
                  <Flex style={{ marginLeft: '-45px'}}>
                    <AddWrapper mr={'8px'}>
                      <TextRow color={'rgba(183, 131, 0, 0.5)'}>TIME</TextRow>
                      <TextRow color={'rgba(183, 131, 0, 0.5)'}>DATE</TextRow>
                    </AddWrapper>
                    <AddWrapper>
                      <TextRow weight={500}>{`${timeFormatStart} CET`}</TextRow>
                      <TextRow transform={'capitalize'} weight={500}>
                        {`${mL[mmStart]} ${ddStart}, ${yyyyStart}`}
                        </TextRow>
                    </AddWrapper>
                  </Flex>
                  <Flex>
                    <AddWrapper mr={'8px'}>
                      <TextRow >liquidity lock</TextRow>
                      <TextRow >locked until</TextRow>
                    </AddWrapper>
                    <AddWrapper>
                      <TextRow weight={500}>{data.Liq_Lock}%</TextRow>
                      <TextRow transform={'capitalize'} weight={500}>
                      {`${timeFormatLock} CET - ${mL[mmLock]} ${ddLock}, ${yyyyLock}`}
                        {/* {mL[month - 1]} {day}, {year} */}
                        </TextRow>
                    </AddWrapper>
                  </Flex>
                  <Flex>
                    <AddWrapper mr={'8px'}>
                      <TextRow >contract address</TextRow>
                      <TextRow >presale address</TextRow>
                    </AddWrapper>
                    <AddWrapper>
                      <TextRow weight={500}>{data.Contract_Address}</TextRow>
                      <TextRow transform={'capitalize'} weight={500}>{data.Presale_Address}</TextRow>
                    </AddWrapper>
                    <DoubleArr onClick={() => setAdditional(false)} rotate={'rotate(270deg)'}>&gt;&gt;</DoubleArr>
                  </Flex>     
                  
                  
              </CollapseWrapper>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
};

export default Row;

// <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Customer</TableCell>
//                       <TableCell align="right">Amount</TableCell>
//                       <TableCell align="right">Total price ($)</TableCell>
//                     </TableRow>
//                   </TableHead>
//                 </Table>

const DoubleArr = styled.div`
  font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 98.1%;
    /* identical to box height, or 16px */
    margin-left: 11px;
    text-align: center;
    color: #B78300;
    cursor: pointer;
    /* transform: rotate(90deg); */
    transform: ${({rotate}) =>  rotate ||'rotate(90deg)'};
        &:hover {
            color: #d5b562
        }
`

const SocialWrapper = styled.div`
  width: 136px;
  height: 30px;

  display: flex;
  justify-content: space-between;
`
const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: rgba(171, 136, 46, 0.5);
  border-radius: 40.4097px;
    &:hover {
      background-color: rgba(171, 136, 46, 0.8);
    }
`

const Image = styled.img.attrs(props => ({
  src: props.src || Image,}))`
width: ${({width}) => width};
height: ${({height}) =>  height || '100%'};
margin: ${({margin}) => margin || '0'};
`;

const TextRow = styled.p`
  font-family: Raleway;
  font-weight: ${({weight}) => weight || 900};
  font-size: ${({size}) => size || '11px'};
  line-height: ${({lineSize}) => lineSize || '16px'};
  color: ${({color}) => color || '#B78300'};
  margin: ${({margin}) => margin || 'auto 0'};
  text-transform: ${({transform}) => transform || 'uppercase'};
`
const AddWrapper = styled.div`
  text-align: start;
  margin-right: ${({mr}) => mr || '0'};
`

const CollapseWrapper = styled.div`
  display: flex;
  padding: 12px 0 8px 60px;
  justify-content: space-between;

`
