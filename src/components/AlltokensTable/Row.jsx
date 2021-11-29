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
import { getBalanceWBNB, getMCap, getPair, getSymbol, getVotesPerProject, toChecksumAddress } from '../../connection/functions'
import { useHolders } from "../../hooks/useHolders";
import { getHolders } from "../../utils/getHolders";
import { getPrice24H } from "../../utils/getPrice24H";
import { changeFormatter } from "../../utils/changeFormatter";
import { getHolderPerDay } from "../../utils/getHolderPerDay";
import { useWeb3React } from "@web3-react/core";
import { Badges } from "../common/badges/Badges";
import { usePrice } from '../../hooks/usePrice';
import { bscWBNBContact } from '../../connection/contracts';

const tokenData = [
    { key: 'Project_ISKYC', text: 'KYC verified', image: <Kyc /> },
    { key: 'Project_ISDOX', text: 'Audited token', image: <Audit /> },
    { key: 'Project_HasUtility', text: 'Usecase token', image: <Utility /> },
    { key: 'Project_IsMemeCoin', text: 'Meme token', image: <Memecoin /> }]

const Row = (
    {
        data, index
    }
) => {
    const bnbPrice = usePrice(bscWBNBContact)

    const { chainId } = useWeb3React()
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

    useEffect(async () => {
        if (data && data.Project_Address) {
            const address = toChecksumAddress(data.Project_Address)
            if (chainId === 56) {
                const res = await getVotesPerProject(address)
                try {
                    setVotes(parseInt(res[0]) + parseInt(res[1]) + parseInt(res[2]))
                } catch (e) {
                    console.log(e)
                }
            } else {
                console.warn('Please connect your wallet to Binance Smart Chain network')
            }
            getHolders(address)
                .then(res => res && setHolders(res))

            getHolderPerDay(address)
                .then(res => res && setHoldersPerDay(`+ ${res}`))

            const price24H = await getPrice24H(address)

            try {

                fetch(`https://api.pancakeswap.info/api/v2/tokens/${address}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then(async (res) => {
                        setPrice((+res.data.price).toFixed(4))
                        console.log(res.data.price_BNB, price24H)
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

    useEffect(async () => {
        if (bnbPrice.price && mcap > 0) {
            const address = toChecksumAddress(data.Project_Address)
            const pair = await getPair(address);

            const wbnb = await getBalanceWBNB(pair);
            setRatio(wbnb * bnbPrice.price / mcap)
        }
    }, [bnbPrice.price, mcap])

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center">
                    <Typography variant="h6" sx={{ mr: '36px' }}>
                        {index + 1}.
                    </Typography>
                    <Box component="img" src={logo} sx={{ width: '66px' }} />
                </Stack>
            </TableCell>
            <TableCell style={{ textAlign: 'left' }}>
                <LinkWrapper to={`/token/${data.Project_Address}`}>
                    <Stack>
                        <Typography variant="h5">
                            {data.Project_Name}
                        </Typography>
                        <Stack direction="row" sx={{ gap: 2, mt: '14px' }}>
                            {data.Project_ISKYC === 'TRUE' && <Kyc />}
                            {data.Project_ISDOX === 'TRUE' && <Audit />}
                            {data.Project_HasUtility === 'TRUE' && <Utility />}
                            {data.Project_IsMemeCoin === 'TRUE' && <Memecoin />}
                        </Stack>
                    </Stack>
                </LinkWrapper>
            </TableCell>
            <TableCell>
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    {data.Project_Symbol}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    {new Intl.NumberFormat('en-US').format(mcap)}
                </Typography>
            </TableCell>
            <TableCell>
                <Stack>
                    <Typography variant="table">
                        {new Intl.NumberFormat('en-US').format(price)}
                    </Typography>
                    {change24h !== 0 && <Flex margin={'6px 0 0 0'} justify={'evenly'}>
                        <Image src={change24h > 0 ? arrowUp : arrowDown} />
                        <Changes24 up={change24h}>{change24h}</Changes24>
                    </Flex>}
                </Stack>
            </TableCell>

            <TableCell>
                {/* <Typography variant="h6">
                        HIGH
                    </Typography> */}
                <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, color: "#16DF42" }}>
                    {new Intl.NumberFormat('en-US').format(ratio)}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    {holders}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    {holdersPerDay}
                </Typography>
            </TableCell>
            <TableCell>
                <Stack direction="row" alignItems="center">
                    <Typography variant="table" sx={{ width: '50px' }}>
                        {votes}
                    </Typography>
                    <Votes address={data.Project_Address} />
                    <More>...</More>
                </Stack>
            </TableCell>
        </TableRow>
    )
}
    ;

export default Row;



