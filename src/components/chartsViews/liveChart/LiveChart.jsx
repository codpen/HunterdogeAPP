import React, { useState, useEffect } from 'react';
import {Grid, Stack, Typography} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {Box} from "@mui/system";
import { AdvancedChart } from "react-tradingview-embed";
import {useParams} from 'react-router-dom'

import arrowUp from "../../../images/arrow-up.svg";
import Pancake from "../../../images/pancakeswap.png";
import {useStyles} from "./LiveChartStyles";
import { getMCap, getSymbol } from '../../../connection/functions'

const Dashboard = ({token}) => {
    const [query, setQuery] = useState('BNB')
    console.log(query)
    useEffect(() => {
        setQuery(token)
    }, [token])
    return (
      <div>
          <AdvancedChart widgetProps={{"theme": "dark", symbol: query + "USD" }} />
      </div>
    );
}

const LiveChart = () => {
    const classes = useStyles();
    const {address} = useParams()
    const [symbol, setSymbol] = useState('')
    const [price, setPrice] = useState(0)
    const [mcap, setMCap] = useState(0)

    useEffect(() => {
        const getSmb = async () => {
            const symbol = await getSymbol(address)
            setSymbol(symbol)
        }
        getSmb()
    }, [address])

    

    useEffect(() => {
        const fetchSheet = async () => {
            try {
                await fetch(`https://api.pancakeswap.info/api/v2/tokens/${address}`)
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
    },[address])

    useEffect(() => {
        const getMarketCap = async () => {
            const mcap = await getMCap(address, price)
            console.log(mcap)
            setMCap(mcap)
        }
        getMarketCap()
    },[price])
    

    const binance = () => console.log('binance')
    const pancakeSwap = () => console.log('pancakeswap')
    const coinbase = () => console.log('coinbase')
    const plug = () => console.log('plug')

    return (
        <Grid container className={classes.root} xs={12}>
            <Grid item className={classes.imgContainer}>
                <Grid container sx={{mb: '22px'}}>
                    <Typography className={classes.liveChartTitle}>
                        LIVE CHART
                    </Typography>
                    <Typography className={classes.liveChartSubTitle}>
                        PAIR {symbol} - BNB
                    </Typography>
                </Grid>
                <Dashboard token={symbol}/>
                <div>
                    <Typography sx={{fontWeight: '500', ml: '250px'}}>
                        SHARE {symbol}
                    </Typography>
                </div>
                {/* <button onClick={plug} className={classes.redBtn}/>
                <button onClick={plug} className={classes.beigeBtn}/> */}
            </Grid>
            <Divider orientation="vertical" className={classes.divider}/>
            <Grid item className={classes.content}>
                <Typography className={classes.stats}>
                    STATS
                </Typography>
                <Typography className={classes.title}>
                    MAX SUPPLY
                </Typography>
                <Typography className={classes.subTitle}>
                    -
                </Typography>
                <Typography className={classes.title}>
                    market cap
                </Typography>
                <Typography className={classes.subTitle}>
                    ${new Intl.NumberFormat('en-US').format(mcap)}
                </Typography>
                <Typography className={classes.title}>
                    current price in usd
                </Typography>
                <Stack direction="row" alignItems="flex-end">
                    <Typography className={classes.subTitle}>
                        ${new Intl.NumberFormat('en-US').format(price)}
                    </Typography>
                    {/* <Stack direction="row" sx={{ml: '17px'}}>
                        <Box component='img' src={arrowUp} sx={{width: '17px', mr: 1}}/>
                        <Typography variant="caption">
                            24H = +12.99%
                        </Typography>
                    </Stack> */}
                </Stack>
                <Stack direction="row" alignItems="flex-end">
                    <Typography className={classes.title}>
                        total liquidity
                    </Typography>
                    <Typography sx={{ml: '42px'}} className={classes.title}>
                        liquidity / Mcap ratio
                    </Typography>
                </Stack>
                <Stack direction="row">
                    <Typography  className={classes.subTitle}>
                        -
                    </Typography>
                    <Typography sx={{ml: '57px'}} className={classes.subTitle}>
                        -
                    </Typography>
                    <Box component='h6' sx={{ml: '7px'}} className={classes.good}>
                        GOOD
                    </Box>
                </Stack>
                <Typography className={classes.title}>
                    Pc v2 | {symbol}/BNB LP HOLDINGS
                </Typography>
                <Stack direction="row" alignItems="center">
                    <Typography className={classes.subTitle}>
                        - BNB
                    </Typography>
                    {/* <Typography variant="caption" sx={{fontSize: '15px', mt: '10px', ml: '14px'}}>
                        -
                    </Typography> */}
                    <Box component='div' className={classes.tabs}>
                        CHART | LP-HOLDERS
                    </Box>
                </Stack>
                <Typography className={classes.title}>
                    Pc v2 | {symbol}/BNB LP HOLDINGS
                </Typography>
                <Stack direction="row" alignItems="center">
                    <Typography className={classes.subTitle}>
                        -
                    </Typography>
                    {/* <Typography variant="caption" sx={{fontSize: '15px', mt: '10px', ml: '14px'}}>
                        -
                    </Typography> */}
                    <Box component='div' className={classes.tabs}>
                        CHART | LP-HOLDERS
                    </Box>
                </Stack>
                <Typography className={classes.title}>
                    liquidity changes since start
                </Typography>
                <Typography className={classes.subTitle}>
                    -
                </Typography>
                <Typography className={classes.title}>
                    WHERE TO BUY
                </Typography>
                <Stack direction="row" className={classes.wrapperBtn}>
                    <button className={classes.stockBtn} onClick={pancakeSwap}>PANCAKESWAP
                        <Box src={Pancake} component='img' sx={{ml: '18px'}}/>
                    </button>
                    <button className={classes.stockBtn} onClick={binance}>BINANCE
                        <Box src={Pancake} component='img' sx={{ml: '18px'}}/>
                    </button>
                    <button className={classes.stockBtn} onClick={coinbase}>COINBASE
                        <Box src={Pancake} component='img' sx={{ml: '18px'}}/>
                    </button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default LiveChart;
