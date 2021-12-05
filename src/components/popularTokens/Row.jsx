import React, { useState, useEffect } from 'react';
import { Stack, TableCell, TableRow, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import styled from "styled-components";
import logo from "../../images/hunter_logo.png";

import { ReactComponent as Kyc } from "../../images/KYC.svg";
import { ReactComponent as Audit } from "../../images/Audit.svg";
import { ReactComponent as Utility } from "../../images/Utility.svg";
import { ReactComponent as Memecoin } from "../../images/Memecoin.svg";

import arrowUp from "../../images/arrow-up.svg";
import { Changes24, Flex, Image, LinkWrapper, More } from "../common";
import { useVotesPerProject } from "../../hooks/useVotesPerProject";
import { Votes } from "../common/votes";
import { getMCap, getVotesPerProject } from '../../connection/functions'
import { CheckPopup } from '../checkPopup/checkPopup';
import arrowDown from "../../images/arrow-down.svg";
import {getPrice24H} from "../../utils/getPrice24H";
import {changeFormatter} from "../../utils/changeFormatter";
import {useWeb3React} from "@web3-react/core";
import { useWallet } from "@binance-chain/bsc-use-wallet";
import {Badges} from "../common/badges/Badges";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Row = ({data, index}) => {
    // const {chainId} = useWeb3React()
    const { account, chainId } = useWallet();
    // const {votes, error, isLoading} = useVotesPerProject(data.Project_Address)
    const [price, setPrice] = useState(0)
    const [mcap, setMCap] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [change24h, setChange24h] = useState()
    const [votes, setVotes] = useState(0)
    const mobileMatches = useMediaQuery('(min-width:600px)');

    const tokenData = [
        { key: 'Project_ISKYC', text: 'KYC verified', image: mobileMatches? <Kyc/>: <Kyc width='12px' height='12px'/> },
        { key: 'Project_ISDOX', text: 'Audited token', image: mobileMatches? <Audit/>: <Audit width='12px' height='12px'/> },
        { key: 'Project_HasUtility', text: 'Usecase token', image: mobileMatches? <Utility/>: <Utility width='12px' height='12px'/> },
        { key: 'Project_IsMemeCoin', text: 'Meme token', image: mobileMatches? <Memecoin/>: <Memecoin width='12px' height='12px'/> }]

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
            const res = await getVotesPerProject(data.Project_Address)
            try {
                setVotes(parseInt(res[0]) + parseInt(res[1]) + parseInt(res[2]))
            } catch (e) {
                console.log(e)
            }
        };
        fetchSheet()
    }, [data])

    useEffect(() => {
        const getMarketCap = async () => {
            const mcap = await getMCap(data.Project_Address, price)
            // console.log(mcap)
            setMCap(mcap)
        }
        getMarketCap()
    }, [price])

    return (
        <TableRow>
            {mobileMatches &&
            <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center">
                    <Typography variant="h6" sx={{ mr: '36px' }}>
                        {index + 1}.
                    </Typography>
                    <Box component="img" src={data.Project_Logo} sx={{ width: '66px' }} />
                </Stack>
            </TableCell>
            }
            
            <TableCell style={{ textAlign: 'left', display: 'flex', alignItems:'center' }}>
                {!mobileMatches && <Box component="img" src={data.Project_Logo} sx={{ width:'20px', height:'20px', marginRight:'4px' }} />}
                <LinkWrapper to={`/token/${data.Project_Address}`}>
                    <Stack>
                        <Typography>
                            {mobileMatches && data.Project_Name}
                            {!mobileMatches &&
                                <small style={{fontSize:'0.5rem'}}>{data.Project_Name}</small>
                            }    
                        </Typography>
                        <Stack direction="row" sx={{ gap: mobileMatches? 2: 1, mt: mobileMatches? '14px': '2px'}}>
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
                                <Badges key={idx * 10 * 2} children={el.image} text={el.text} />))}
                        </Stack>
                    </Stack>
                </LinkWrapper>
            </TableCell>

            <TableCell>
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    {mobileMatches && data.Project_Symbol}
                    {!mobileMatches &&
                        <small style={{fontSize:'0.5rem'}}>{data.Project_Symbol}</small>
                    }    
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    {mobileMatches && <label>${new Intl.NumberFormat('en-US').format(mcap)}</label>}
                    {!mobileMatches &&
                        <small style={{fontSize:'0.5rem'}}>${new Intl.NumberFormat('en-US').format(mcap)}</small>
                    }  
                </Typography>
            </TableCell>
            <TableCell>
                <Stack>
                    <Typography variant="table">
                        {mobileMatches && <label>${new Intl.NumberFormat('en-US').format(price)}</label>}
                        {!mobileMatches &&
                            <small style={{fontSize:'0.5rem'}}>${new Intl.NumberFormat('en-US').format(price)}</small>
                        } 
                    </Typography>
                    {change24h && <Flex margin={'6px 0 0 0'} justify={'evenly'}>
                        <Image src={change24h.up ? arrowUp : arrowDown} />
                        <Changes24 up={change24h.up}>{change24h.text}</Changes24>
                    </Flex>}
                </Stack>
            </TableCell>
            <TableCell>
                <Stack direction="row" alignItems="center">
                    <Typography>
                        <small style={{fontSize: mobileMatches? '1rem': '0.5rem'}}>{votes}</small>
                    </Typography>
                    {mobileMatches && <Votes address={data.Project_Address} />}
                    {mobileMatches && 
                    <More onClick={() => setIsOpen(!isOpen)}>...
                        {isOpen && <CheckPopup item={data} setIsOpen={setIsOpen} />}
                    </More>
                    }
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