import React, {useState, useEffect} from 'react';
import {Stack, TableCell, TableRow, Typography} from "@material-ui/core";
import {Box} from "@mui/system";
import logo from "../../images/hunter_logo.png";
import {ReactComponent as Kyc} from "../../images/KYC.svg";
import {ReactComponent as Audit} from "../../images/Audit.svg";
import {ReactComponent as Utility} from "../../images/Utility.svg";
import {ReactComponent as Memecoin} from "../../images/Memecoin.svg";

import arrowUp from "../../images/arrow-up.svg";
import arrowDown from "../../images/arrow-down.svg";
import { Changes24, Flex, Image, LinkWrapper, More} from "../common";
import {useVotesPerProject} from "../../hooks/useVotesPerProject";
import {Votes} from "../common/votes";
import {getMCap, getSymbol, getVotesPerProject} from '../../connection/functions'
import {useHolders} from "../../hooks/useHolders";
import {getHolders} from "../../utils/getHolders";
import {marketCap} from "../../utils/marketCap";
import {changeFormatter} from "../../utils/changeFormatter";
import {getHolderPerDay} from "../../utils/getHolderPerDay";
import {useWeb3React} from "@web3-react/core";
import {Badges} from "../common/badges/Badges";

const tokenData = [
    {key: 'Project_ISKYC', text: 'KYC verified', image: <Kyc/>},
    {key: 'Project_ISDOX', text: 'Audited token', image: <Audit/>},
    {key: 'Project_HasUtility', text: 'Usecase token', image: <Utility/>},
    {key: 'Project_IsMemeCoin', text: 'Meme token', image: <Memecoin/>}]

const Row = (
    {
        data, index
    }
    ) => {
        const {chainId} = useWeb3React()
        // const {votes, error, isLoading} = useVotesPerProject(data.Project_Address)
        // const holders = useHolders(data.Project_Address)
        const [price, setPrice] = useState(0)
        const [holders, setHolders] = useState(0)
        const [holdersPerDay, setHoldersPerDay] = useState(0)
        const [mcap, setMCap] = useState(0)
        const [symbol, setSymbol] = useState('')
        const [change24h, setChange24h] = useState()

        useEffect(() => {
            if (chainId === 56) {
                if (data.Project_Address) {
                    const call = async () => {
                        const res = await getVotesPerProject(data.Project_Address)
                        console.log('votes', res)
                    }
                    call()
                }
            } else {
                console.warn('Please connect your wallet to Binance Smart Chain network')
            }
        }, [data.Project_Address])



        useEffect(() => {
            if (data) {
                getHolders(data.Project_Address)
                    .then(res => setHolders(res))

                getHolderPerDay(data.Project_Address)
                    .then(res => setHoldersPerDay(`+ ${res}`))
            }
        }, [data])

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
                const symbol = await getSymbol(data.Project_Address)
                setSymbol(symbol)
            };
            fetchSheet()
        }, [data])

        return (
            <TableRow>
                <TableCell component="th" scope="row">
                    <Stack direction="row" alignItems="center">
                        <Typography variant="h6" sx={{mr: '36px'}}>
                            {index + 1}.
                        </Typography>
                        <Box component="img" src={logo} sx={{width: '66px'}}/>
                    </Stack>
                </TableCell>
                <TableCell style={{textAlign: 'left'}}>
                    <LinkWrapper to={`/token/${data.Project_Address}`}>
                        <Stack>
                            <Typography variant="h5">
                                {data.Project_Name}
                            </Typography>
                            <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                                {data.Project_ISKYC === 'TRUE' && <Kyc/>}
                                {data.Project_ISDOX === 'TRUE' && <Audit/>}
                                {data.Project_HasUtility === 'TRUE' && <Utility/>}
                                {data.Project_IsMemeCoin === 'TRUE' && <Memecoin/>}
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
                        {new Intl.NumberFormat('en-US').format(data.Project_MarketCap)}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Stack>
                        <Typography variant="table">
                            {new Intl.NumberFormat('en-US').format(data.Project_Price)}
                        </Typography>
                        {change24h && <Flex margin={'6px 0 0 0'} justify={'evenly'}>
                            <Image src={change24h.up ? arrowUp : arrowDown}/>
                            <Changes24 up={change24h.up}>{change24h.text}</Changes24>
                        </Flex>}
                    </Stack>
                </TableCell>

                <TableCell>
                    {/* <Typography variant="h6">
                        HIGH
                    </Typography> */}
                    <Typography variant="h6" sx={{fontSize: 16, fontWeight: 600, color: "#16DF42"}}>
                        0.89
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="table">
                        {data.Project_Holder}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="table">
                        {holdersPerDay}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Stack direction="row" alignItems="center">
                        <Typography variant="table" sx={{width: '50px'}}>
                            {/*{votes}*/}
                            0
                        </Typography>
                        <Votes address={data.Project_Address}/>
                        <More>...</More>
                    </Stack>
                </TableCell>
            </TableRow>
        )
    }
;

export default Row;



