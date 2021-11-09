import React, { useState } from 'react';
import {Grid, Stack, Typography} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {Box} from "@mui/system";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

import Chart from "../../../images/Chart.png";
import arrowUp from "../../../images/arrow-up.svg";
import Pancake from "../../../images/pancakeswap.png";
import {useStyles} from "./LiveChartStyles";

const Dashboard = () => {
    const [query, setQuery] = useState('BNB')

    return (
      <div>
        <div id='mainChart' className="charty">
          {query.length > 2 ? (
            <TradingViewEmbed
              widgetType={widgetType.ADVANCED_CHART}
              widgetConfig={{
                interval: "1D",
                colorTheme: "dark",
                width: "100%",
                symbol: query + "USD",
              }}
            />
          ) : (
            "BNBUSD"
          )}
        </div>
      </div>
    );
}

const LiveChart = () => {
    const classes = useStyles();

    const binance = () => console.log('binance')
    const pancakeSwap = () => console.log('pancakeswap')
    const coinbase = () => console.log('coinbase')
    const plug = () => console.log('plug')

    return (
        <Grid container className={classes.root} xs={12}>
            <Grid item className={classes.imgContainer}>
                <Grid container>
                    <Typography className={classes.liveChartTitle}>
                        LIVE CHART
                    </Typography>
                    <Typography className={classes.liveChartSubTitle}>
                        PAIR HUNT - BNB
                    </Typography>
                </Grid>
                <Dashboard />
                <div>
                    <Typography sx={{fontWeight: '500', ml: '250px'}}>
                        SHARE $HUNT
                    </Typography>
                </div>
                <button onClick={plug} className={classes.redBtn}/>
                <button onClick={plug} className={classes.beigeBtn}/>
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
                    500’000’000’000’000’000
                </Typography>
                <Typography className={classes.title}>
                    market cap
                </Typography>
                <Typography className={classes.subTitle}>
                    $105’505’044
                </Typography>
                <Typography className={classes.title}>
                    current price in usd
                </Typography>
                <Stack direction="row" alignItems="flex-end">
                    <Typography className={classes.subTitle}>
                        $0.0000000832
                    </Typography>
                    <Stack direction="row" sx={{ml: '17px'}}>
                        <Box component='img' src={arrowUp} sx={{width: '17px', mr: 1}}/>
                        <Typography variant="caption">
                            24H = +12.99%
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" alignItems="flex-end">
                    <Stack>
                        <Typography className={classes.title}>
                            total liquidity
                        </Typography>
                        <Typography className={classes.subTitle}>
                            $98’034’283
                        </Typography>
                    </Stack>
                    <Stack sx={{ml: '28px'}}>
                        <Typography className={classes.title}>
                            liquidity / Mcap ratio
                        </Typography>
                        <Stack direction="row">
                            <Typography className={classes.subTitle}>
                                0.52
                            </Typography>
                            {/*<Box component='h6' className={classes.good}>*/}
                            {/*    GOOD*/}
                            {/*</Box>*/}
                        </Stack>
                    </Stack>
                </Stack>
                <Typography className={classes.title}>
                    Pc v2 | HUNT/BNB LP HOLDINGS
                </Typography>
                <Stack direction="row" alignItems="center">
                    <Typography className={classes.subTitle}>
                        3,863.91 BNB
                    </Typography>
                    <Typography variant="caption" sx={{fontSize: '15px', mt: '10px', ml: '14px'}}>
                        ($1’313’078)
                    </Typography>
                    <Box component='div' className={classes.tabs}>
                        CHART | LP-HOLDERS
                    </Box>
                </Stack>
                <Typography className={classes.title}>
                    Pc v2 | HUNT/BNB LP HOLDINGS
                </Typography>
                <Stack direction="row" alignItems="center">
                    <Typography className={classes.subTitle}>
                        3,863.91 BNB
                    </Typography>
                    <Typography variant="caption" sx={{fontSize: '15px', mt: '10px', ml: '14px'}}>
                        ($1’313’078)
                    </Typography>
                    <Box component='div' className={classes.tabs}>
                        CHART | LP-HOLDERS
                    </Box>
                </Stack>
                <Typography className={classes.title}>
                    liquidity changes since start
                </Typography>
                <Typography className={classes.subTitle}>
                    -36%
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
