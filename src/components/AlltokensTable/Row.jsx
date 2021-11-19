import React, { useState, useEffect } from 'react';
import {Stack, TableCell, TableRow, Typography} from "@material-ui/core";
import {Box} from "@mui/system";
import logo from "../../images/hunter_logo.png";
import {ReactComponent as Kyc} from "../../images/KYC.svg";
import {ReactComponent as Audit} from "../../images/Audit.svg";
import {ReactComponent as Utility} from "../../images/Utility.svg";
import {ReactComponent as Memecoin} from "../../images/Memecoin.svg";
import arrowUp from "../../images/arrow-up.svg";
import {LinkWrapper, More} from "../common";
import {useVotesPerProject} from "../../hooks/useVotesPerProject";
import {Votes} from "../common/votes";
import { getMCap, getSymbol } from '../../connection/functions'
import {useHolders} from "../../hooks/useHolders";

const Row = (
{
    data, index
}
) =>
{
    const {votes, error, isLoading} = useVotesPerProject(data.Project_Address)
    const holders = useHolders(data.Project_Address)
    const [price, setPrice] = useState(0)
    const [mcap, setMCap] = useState(0)
    const [symbol, setSymbol] = useState('')

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
    },[data])

    useEffect(() => {
        const getMarketCap = async () => {
            const mcap = await getMCap(data.Project_Address, price)
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
                    <Box component="img" src={logo} sx={{width: '66px'}}/>
                </Stack>
            </TableCell>
            <TableCell style={{ textAlign: 'left' }}>
                <LinkWrapper to={`/token/${data.Project_Address}`}>
                    <Stack>
                        <Typography variant="h5">
                            {data.Project_Name}
                        </Typography>
                        <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                            {data.KYC === 'TRUE' && <Kyc/>}
                            {data.Audit === 'TRUE' && <Audit/>}
                            {data.Utility === 'TRUE' && <Utility/>}
                            {data.Memecoin === 'TRUE' && <Memecoin/>}
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
                    {new Intl.NumberFormat('en-US').format(mcap)}
                </Typography>
            </TableCell>
            <TableCell>
                <Stack>
                    <Typography variant="table">
                        {new Intl.NumberFormat('en-US').format(price)}
                    </Typography>
                    {/* <Stack direction="row" sx={{mt: 1}}>
                        <Box component='img' src={arrowUp} sx={{width: '17px', mr: 1}}/>
                        <Typography variant="caption">
                            24H = +12.99%
                        </Typography>
                    </Stack> */}
                </Stack>
            </TableCell>

            <TableCell>
                <Typography variant="h6">
                    HIGH
                </Typography>
                <Typography variant="h6" sx={{fontSize: 16, fontWeight: 600}}>
                    -
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    {holders}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table" sx={{textTransform: 'capitalize'}}>
                    -
                </Typography>
            </TableCell>
            <TableCell>
                <Stack direction="row" alignItems="center">
                    <Typography variant="table" sx={{width: '50px'}}>
                        {votes}
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
