import React, { useState, useEffect } from 'react';
import { Stack, TableCell, TableRow, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import logo from "../../images/hunter_logo.png";
import { ReactComponent as Kyc } from "../../images/KYC.svg";
import { ReactComponent as Audit } from "../../images/Audit.svg";
import { ReactComponent as Utility } from "../../images/Utility.svg";
import { ReactComponent as Memecoin } from "../../images/Memecoin.svg";

import arrowUp from "../../images/arrow-up.svg";
import arrowDown from "../../images/arrow-down.svg";
import { Changes24, Flex, Image, LinkWrapper, More } from "../common";
import { useVotesPerProject } from "../../hooks/useVotesPerProject";
import { Votes } from "../common/votes";
import { getBalanceWBNB, getMCap, getPair, getVotesPerProject, toChecksumAddress } from '../../connection/functions'
import { useHolders } from "../../hooks/useHolders";
import { getHolders } from "../../utils/getHolders";
import { getPrice24H } from "../../utils/getPrice24H";
import { changeFormatter } from "../../utils/changeFormatter";
import { getHolderPerDay } from "../../utils/getHolderPerDay";
import { useWeb3React } from "@web3-react/core";
import { useWallet } from "@binance-chain/bsc-use-wallet";
import { Badges } from "../common/badges/Badges";
import { usePrice } from '../../hooks/usePrice';
import { bscWBNBContact } from '../../connection/contracts';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const tokenData = [
    { key: 'Project_ISKYC', text: 'KYC verified', image: <Kyc /> },
    { key: 'Project_ISDOX', text: 'Audited token', image: <Audit /> },
    { key: 'Project_HasUtility', text: 'Usecase token', image: <Utility /> },
    { key: 'Project_IsMemeCoin', text: 'Meme token', image: <Memecoin /> }]

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#FFF599',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
        borderRadius: '20px'
    },
}));

const Row = ({ data, index }) => {
    const bnbPrice = usePrice(bscWBNBContact)
    const mobileMatches = useMediaQuery('(min-width:600px)');
    // const { chainId } = useWeb3React()
    const { account, chainId } = useWallet();
    // const {votes, error, isLoading} = useVotesPerProject(data.Project_Address)
    // const holders = useHolders(data.Project_Address)
    const [price, setPrice] = useState(0)
    const [holders, setHolders] = useState(0)
    const [holdersPerDay, setHoldersPerDay] = useState(0)
    const [mcap, setMCap] = useState(0)
    const [symbol, setSymbol] = useState('')
    const [change24h, setChange24h] = useState(0)
    const [votes, setVotes] = useState(0)
    const [ratio, setRatio] = useState(0)
    const [timer, setTimer] = useState(0)

    const callTimer = (address) => {
        if (timer) {
            clearInterval(timer)
        }
        let handle = setInterval(() => {
            getHolderPerDay(address)
                .then(res => {
                    if (res) {
                        setHoldersPerDay(`+ ${res}`)
                    }
                })
        }, 3000000);
        setTimer(handle)
    }

    useEffect(async () => {
        if (data && data.Project_Address) {
            const address = toChecksumAddress(data.Project_Address)
            if (chainId === 56) {
                const res = await getVotesPerProject(address)
                try {
                    setVotes(parseInt(res[0]) * 2 + parseInt(res[1]) - parseInt(res[2]))
                    data.Project_Upvotes = res[0]
                    data.Project_MedVotes = res[1]
                    data.Project_Downvotes = res[2]
                    data.save()
                } catch (e) {
                    console.log(e)
                }
            } else {
                console.warn('Please connect your wallet to Binance Smart Chain network')
            }
            getHolders(address)
                .then(res => res && setHolders(res))
            callTimer(address)

            getHolderPerDay(address)
                .then(res => res && setHoldersPerDay(`+ ${res}`))

            const price24H = await getPrice24H(address)

            try {

                await fetch(`https://api.pancakeswap.info/api/v2/tokens/${address}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then(async (res) => {
                        setPrice((+res.data.price))

                        setChange24h(((res.data.price_BNB / price24H - 1) * 100).toFixed(4))

                        setSymbol(res.data.symbol)
                        let mcap = await getMCap(address, res.data.price)

                        setMCap(mcap)
                    });
            } catch (e) {
                console.warn(e)
            }
        }
    }, [data])

    useEffect(() => {
        if (holders) data.Project_Holder = holders;
        if (price) data.Project_Price = price;
        if (mcap) data.Project_MarketCap = mcap;
        if (holdersPerDay) data.Project_HolderGrowth = holdersPerDay;
        if (ratio) data.Project_LiqMcapRatio = ratio;

        data.save()
    }, [holders, price, mcap, holdersPerDay, ratio])

    useEffect(async () => {
        if (bnbPrice.price && mcap > 0) {
            const address = toChecksumAddress(data.Project_Address)
            const pair = await getPair(address);

            const wbnb = await getBalanceWBNB(pair);
            if (mcap > 0) {
                setRatio(wbnb * bnbPrice.price / mcap * 100)
            }
        }
    }, [bnbPrice.price, mcap])

    return (
        <TableRow>
            {mobileMatches &&
                <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center' }}>
                    {data.has_Presale === 'TRUE' && <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                            transform: 'rotate(270deg)',
                            position: 'absolute',
                            backgroundColor: '#CB5DCD',
                            color: '#FFF',
                            width: 'max-content',
                            height: 'fit-content',
                            padding: '4px',
                            borderRadius: '5px',
                        }}
                    >Pre-Sale</Stack>}
                    <Stack direction="row" alignItems="center">
                        <Typography variant="h6" sx={{ mr: '36px' }}>
                            {index + 1}.
                        </Typography>
                        <Box component="img" src={data.Project_Logo} sx={{ width: '66px' }} />
                    </Stack>
                </TableCell>
            }
            <TableCell style={{ textAlign: 'left', display: mobileMatches ? 'table-cell' : 'flex', alignItems: 'center' }}>
                {!mobileMatches && <Box component="img" src={data.Project_Logo} sx={{ width: '20px', height: '20px', marginRight: '4px' }} />}
                <LinkWrapper to={`/token/${data.Project_Address}`}>
                    <Stack>
                        <Typography variant="h5">
                            {mobileMatches && data.Project_Name}
                            {!mobileMatches &&
                                <small style={{ fontSize: '0.5rem' }}>{data.Project_Name}</small>
                            }
                        </Typography>
                        {mobileMatches &&
                            <Stack direction="row" sx={{ gap: mobileMatches ? 2 : 1, mt: mobileMatches ? '14px' : '2px' }}>
                                {
                                    data.Project_ISKYC === 'TRUE' &&
                                    <HtmlTooltip title={<React.Fragment><Typography>KYC verified</Typography></React.Fragment>}>
                                        <Kyc />
                                    </HtmlTooltip>
                                }
                                {
                                    data.Project_ISDOX === 'TRUE' &&
                                    <HtmlTooltip title={<React.Fragment><Typography>Audited token</Typography></React.Fragment>}>
                                        <Audit />
                                    </HtmlTooltip>
                                }
                                {
                                    data.Project_HasUtility === 'TRUE' &&
                                    <HtmlTooltip title={<React.Fragment><Typography>Usecase token</Typography></React.Fragment>}>
                                        <Utility />
                                    </HtmlTooltip>
                                }
                                {
                                    data.Project_IsMemeCoin === 'TRUE' &&
                                    <HtmlTooltip title={<React.Fragment><Typography>Meme token</Typography></React.Fragment>}>
                                        <Memecoin />
                                    </HtmlTooltip>
                                }
                            </Stack>
                        }
                    </Stack>
                </LinkWrapper>
            </TableCell>
            <TableCell>
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    {mobileMatches && data.Project_Symbol}
                    {!mobileMatches &&
                        <small style={{ fontSize: '0.5rem' }}>{data.Project_Symbol}</small>
                    }
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    {mobileMatches && <label>${new Intl.NumberFormat('en-US').format(mcap)}</label>}
                    {!mobileMatches &&
                        <small style={{ fontSize: '0.5rem' }}>${new Intl.NumberFormat('en-US').format(mcap)}</small>
                    }
                </Typography>
            </TableCell>
            <TableCell>
                <Stack>
                    {/* <HtmlTooltip title={<React.Fragment><Typography>${price}</Typography></React.Fragment>}>
                        <Typography variant="table">
                            ${new Intl.NumberFormat('en-US').format(price.toFixed(4))}
                        </Typography>
                    </HtmlTooltip> */}
                    <Typography variant="table">
                        {mobileMatches && <label>${Number(price.toFixed(18))}</label>}
                        {!mobileMatches &&
                            <small style={{ fontSize: '0.5rem' }}>${Number(price.toFixed(18))}</small>
                        }
                    </Typography>
                    {change24h !== 0 && isNaN(change24h) === false && <Flex margin={'6px 0 0 0'} justify={'evenly'}>
                        <Image src={change24h > 0 ? arrowUp : arrowDown} />
                        <Changes24 up={change24h}>{change24h}%</Changes24>
                    </Flex>}
                </Stack>
            </TableCell>
            <TableCell>
                {/* <Typography variant="h6">
                        HIGH
                    </Typography> */}
                <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, color: "#16DF42" }}>
                    {mobileMatches && <label>{new Intl.NumberFormat('en-US').format(ratio)}%</label>}
                    {!mobileMatches &&
                        <small style={{ fontSize: '0.5rem' }}>{new Intl.NumberFormat('en-US').format(ratio)}%</small>
                    }
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    {mobileMatches && <label>{holders}</label>}
                    {!mobileMatches &&
                        <small style={{ fontSize: '0.5rem' }}>{holders}</small>
                    }
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    {mobileMatches && <label>{holdersPerDay}</label>}
                    {!mobileMatches &&
                        <small style={{ fontSize: '0.5rem' }}>{holdersPerDay}</small>
                    }
                </Typography>
            </TableCell>

            {mobileMatches &&
                <>
                    <TableCell>
                        <Typography variant="table" sx={{ width: '50px' }}>
                            {votes}
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Stack direction="row" alignItems="center">
                            <Votes address={data.Project_Address} />
                            <More>...</More>
                        </Stack>
                    </TableCell>
                </>
            }
        </TableRow>
    )
}
    ;

export default Row;



