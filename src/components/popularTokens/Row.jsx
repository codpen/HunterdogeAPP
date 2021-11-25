import React, { useState, useEffect } from 'react';
import {Stack, TableCell, TableRow, Typography} from "@material-ui/core";
import {Box} from "@mui/system";
import styled from "styled-components";
import logo from "../../images/hunter_logo.png";

import {ReactComponent as Kyc} from "../../images/KYC.svg";
import {ReactComponent as Audit} from "../../images/Audit.svg";
import {ReactComponent as Utility} from "../../images/Utility.svg";
import {ReactComponent as Memecoin} from "../../images/Memecoin.svg";

import arrowUp from "../../images/arrow-up.svg";
import {Changes24, Flex, Image, LinkWrapper, More} from "../common";
import {useVotesPerProject} from "../../hooks/useVotesPerProject";
import {Votes} from "../common/votes";
import {getMCap} from '../../connection/functions'
import { CheckPopup } from '../checkPopup/checkPopup';
import arrowDown from "../../images/arrow-down.svg";
import {marketCap} from "../../utils/marketCap";
import {changeFormatter} from "../../utils/changeFormatter";
import {useWeb3React} from "@web3-react/core";
import {Badges} from "../common/badges/Badges";

const tokenData = [
    {key: 'Project_ISKYC', text: 'KYC verified', image: <Kyc/>},
    {key: 'Project_ISDOX', text: 'Audited token', image: <Audit/>},
    {key: 'Project_HasUtility', text: 'Usecase token', image: <Utility/>},
    {key: 'Project_IsMemeCoin', text: 'Meme token', image: <Memecoin/>}]

const Row = ({data, index}) => {
    const {chainId} = useWeb3React()

    // const {votes, error, isLoading} = useVotesPerProject(data.Project_Address)
    const [price, setPrice] = useState(0)
    const [mcap, setMCap] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [change24h, setChange24h] = useState()

    useEffect(() => {
        marketCap(data.Project_Symbol)
            .then((res) => changeFormatter(res.percent_change_24h))
            .then((res) => setChange24h(res))
    }, [])

    useEffect(() => {
        const fetchSheet = async () => {
            try {
                await fetch(`https://api.pancakeswap.info/api/v2/tokens/${data.Project_Address}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        setPrice((+data.data.price).toFixed(4))
                    });
            } catch (e) {
                console.warn(e)
            }
        };
        fetchSheet()
    },[data])

    useEffect(() => {
        const getMarketCap = async () => {
            const mcap = await getMCap(data.Project_Address, price)
            // console.log(mcap)
            setMCap(mcap)
        }
        getMarketCap()
    },[price])

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center">
                    <Typography variant="h6" sx={{mr: '36px'}}>
                        {index + 1}.
                    </Typography>
                    <Box component="img" src={data.Project_Logo} sx={{width: '66px'}}/>
                </Stack>
            </TableCell>
            <TableCell style={{ textAlign: 'left'}}>
                <LinkWrapper to={`/token/${data.Project_Address}`}>
                    <Stack>
                        <Typography variant="h5">
                            {data.Project_Name}
                        </Typography>
                        <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                            {/*{data.KYC === 'TRUE' && */}
                            {/*    <Kyc/>*/}
                            {/*}*/}
                            {/*{data.Audit === 'TRUE' && */}
                            {/*    <Audit/>*/}
                            {/*}*/}
                            {/*{data.Utility === 'TRUE' && */}
                            {/*    <Utility/>*/}
                            {/*}*/}
                            {/*{data.Memecoin === 'TRUE' && */}
                            {/*    <Memecoin/>*/}
                            {/*}*/}
                            {data && tokenData.map(((el, idx) => data[el.key] === 'TRUE' &&
                                <Badges key={idx * 10 * 2} children={el.image} text={el.text}/>))}
                            
                        </Stack>
                    </Stack>
                </LinkWrapper>
            </TableCell>
            <TableCell>
                <Typography variant="h6" sx={{fontWeight: 900}}>
                    {data.Project_Symbol}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    ${new Intl.NumberFormat('en-US').format(mcap)}
                </Typography>
            </TableCell>
            <TableCell>
                <Stack>
                    <Typography variant="table">
                        ${new Intl.NumberFormat('en-US').format(price)}
                    </Typography>
                    {change24h && <Flex margin={'6px 0 0 0'} justify={'evenly'}>
                        <Image src={change24h.up ? arrowUp : arrowDown}/>
                        <Changes24 up={change24h.up}>{change24h.text}</Changes24>
                    </Flex>}
                </Stack>
            </TableCell>
            <TableCell>
                <Stack direction="row" alignItems="center">
                    <Typography variant="table" sx={{width: '50px'}}>
                        {/*{votes}*/}
                    </Typography>
                    <Votes address={data.Project_Address}/>
                    <More onClick={() => setIsOpen(!isOpen)}>...
                        {isOpen && <CheckPopup setIsOpen={setIsOpen}/>}
                    </More>
                </Stack>
            </TableCell>
        </TableRow>
    )
};

export default Row;

export const WrapperIco = styled.div`
  width: 20px;
  height: 20px;
`