import React, {useEffect, useState} from 'react';
import {AdvancedChart} from "react-tradingview-embed";
import {useParams} from 'react-router-dom'
import {
    Changes24,
    ChartWrapper,
    LinkWrapper,
    LiveChartSubtitle,
    LiveChartTitle,
    Tab,
    Title,
    Value,
    Wrapper
} from "./LiveChartStyles";
import {getBalanceWBNB, getMCap, getPair, getSymbol} from '../../../connection/functions'
import {Flex} from "../upcomingPreSale/PreSaleStyled";
import {HeadTitle, RightContent} from "../tokenInformation/TokenInfoStyled";
import {Button} from "../../common";
import ReportTokenModal from '../../modal/ReportToken';
import {Box, Stack, useMediaQuery} from '@mui/material';
import {usePrice} from '../../../hooks/usePrice';
import {bscWBNBContact} from '../../../connection/contracts';

const Dashboard = ({ token }) => {
    const [query, setQuery] = useState('BNB')
    const [isComingSoon, setIsComingSoon] = useState(true)
    const mobileMatches = useMediaQuery('(max-width:600px)');
    // console.log(query)
    useEffect(() => {
        setQuery(token)
    }, [token])
    return (
        <Stack component='div' sx={{ position: 'relative', height: (mobileMatches ? `${(window.innerWidth - 50)}px` : '466px') }}>
            {
                isComingSoon &&
                <Stack
                    component='div'
                    sx={{ position: 'absolute', width: '100%', height: (mobileMatches ? `${(window.innerWidth - 50)}px` : '466px'), zIndex: 1, backdropFilter: 'blur(3px)' }}
                >
                    <Box component='h2' sx={{ fontSize: '60px', m: 'auto', textAlign: 'center' }}>
                        Coming Soon.
                    </Box>
                </Stack>
            }
            <AdvancedChart widgetProps={{ "theme": "dark", symbol: query + "USD", height: (mobileMatches ? `${(window.innerWidth - 50)}px` : '466px') }} />
        </Stack>
    );
}

const LiveChart = ({ tokenData = {} }) => {
    const mobileMatches = useMediaQuery('(max-width:600px)');
    const { address } = useParams()
    const [symbol, setSymbol] = useState('')
    const [price, setPrice] = useState(0)
    const [totalLP, setTotalLP] = useState(0)
    const [wbnb, setWBNB] = useState(0)
    const [mcap, setMCap] = useState(0)
    const [ratio, setRatio] = useState(0)
    const [change24h, setChange24h] = useState()
    const [isModal, setIsModal] = useState(false)
    const bnbPrice = usePrice(bscWBNBContact)

    useEffect(async () => {
        const symbol = await getSymbol(address)
        setSymbol(symbol)

        try {
            await fetch(`https://api.pancakeswap.info/api/v2/tokens/${address}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setPrice((+data.data.price))

                });
        } catch (e) {
            console.warn(e)
        }
    }, [address])

    useEffect(async () => {
        const pair = await getPair(address);

        const wbnb = await getBalanceWBNB(pair);
        setWBNB(wbnb)
        setTotalLP(wbnb * bnbPrice.price)
        if (mcap > 0) {
            setRatio(wbnb * bnbPrice.price / mcap * 100)
        }
    }, [bnbPrice])

    useEffect(async () => {
        if (price > 0) {
            const mcap = await getMCap(address, price)
            setMCap(mcap)
        }
    }, [price])
    return (
        <Wrapper isMobile={mobileMatches}>
            <ChartWrapper>
                <Flex margin={'0 0 5px 0'}>
                    <LiveChartTitle size={'14px'}>LIVE CHART</LiveChartTitle>
                    <LiveChartSubtitle size={'14px'}>PAIR {symbol} - BNB</LiveChartSubtitle>
                </Flex>
                <Dashboard token={symbol} />
                <Button onClick={() => setIsModal(true)} size={'14px'} margin={'20px auto'} width={'277px'} height={ mobileMatches ? '25px' : undefined}>report this token to staff</Button>
            </ChartWrapper>
            <RightContent width={mobileMatches ? '100%' : 'inherit'} margin={mobileMatches ? '20px 0' : '0 0 0 31px'}>
                <HeadTitle margin={'0 0 31px 0'} align={'center'} size={'18px'}>statistics</HeadTitle>
                <Stack sx={{ display: 'flex', flexDirection: (mobileMatches ? 'row' : 'column'), justifyContent: 'space-between' }}>
                    <Title>Max supply</Title>
                    <Value>{new Intl.NumberFormat('en-US').format(tokenData?.Project_Token_Max)}</Value>
                </Stack>
                <Stack sx={{ display: 'flex', flexDirection: (mobileMatches ? 'row' : 'column'), justifyContent: 'space-between' }}>
                    <Title>Market cap</Title>
                    <Value>${new Intl.NumberFormat('en-US').format(mcap)}</Value>
                </Stack>
                <Stack sx={{ display: 'flex', flexDirection: (mobileMatches ? 'row' : 'column'), justifyContent: 'space-between' }}>
                    <Title>Current price in USD</Title>
                    <Flex>
                        <Value>${new Intl.NumberFormat('en-US').format(price.toFixed(4))}</Value>
                        {change24h && <Changes24 up={change24h.up}>{change24h.text}</Changes24>}
                    </Flex>
                </Stack>
                <Flex direction={mobileMatches ? 'column' : undefined}>
                    <Flex
                        content={mobileMatches ? 'space-between' : undefined}
                        style={{ width: (mobileMatches ? '100%' : '') }}
                        direction={mobileMatches ? 'row' : 'column'}>
                        <Title>Total liquidity</Title>
                        <Value>${new Intl.NumberFormat('en-US').format(totalLP.toFixed(4))}</Value>
                    </Flex>
                    <Flex
                        content={mobileMatches ? 'space-between' : undefined}
                        style={{ width: (mobileMatches ? '100%' : '') }}
                        direction={mobileMatches ? 'row' : 'column'}
                        margin={mobileMatches ? '0' : '0 0 0 64px'}>
                        <Title>Liquidity / Mcap ratio</Title>
                        <Flex>
                            <Value>${new Intl.NumberFormat('en-US').format(ratio.toFixed(4))}</Value>
                            {/*<Good>good</Good>*/}
                        </Flex>
                    </Flex>
                </Flex>
                {[0].map((el, idx) => <Flex key={idx * 23} content={'space-between'} direction={mobileMatches ? 'column' : undefined}>
                    <Flex direction={'column'}>
                        <Title size={'12px'}>Pc v2 | {symbol}/BNB LP Holdings</Title>
                        <Flex>
                            <Value size={'12px'} margin={mobileMatches ? '0' : undefined}>
                                {wbnb ? new Intl.NumberFormat('en-US').format(wbnb) : '-'} BNB ( ${new Intl.NumberFormat('en-US').format(totalLP.toFixed(4))} )
                            </Value>
                            {/*<Changes24 up={true}>($1’313’078)</Changes24>*/}
                        </Flex>
                    </Flex>
                    <Tab>
                        <LinkWrapper disable={true} href={`https://bscscan.com/token/${bscWBNBContact}?a=${address}#tokenAnalytics`}>CHART</LinkWrapper>
                        <LinkWrapper disable={true} href={`https://bscscan.com/token/${address}#balances`}>LP-HOLDERS</LinkWrapper>
                    </Tab>
                </Flex>)}
                {/* <Title size={'12px'}>Liquidity changes since start</Title>
                <Value size={'12px'}>-</Value> */}
                {/* <Title weight={'600'}>
                    WHERE TO BUY
                </Title> */}
                {/* <Flex content={'space-between'}>
                    <LinkWrapper href={'https://www.binance.com/en'} target={'_blank'}>
                        <p>BINANCE</p>
                        <Image height={'12px'} src={Pancake}/>
                    </LinkWrapper>
                    <LinkWrapper href={'https://www.coinbase.com'} target={'_blank'}>
                        <p>COINBASE</p>
                        <Image height={'12px'} src={Pancake}/>
                    </LinkWrapper>
                    <LinkWrapper href={'https://pancakeswap.finance'} target={'_blank'}>
                        <p>PANCAKESWAP</p>
                        <Image height={'12px'} src={Pancake}/>
                    </LinkWrapper>
                </Flex> */}
            </RightContent>
            {isModal && <ReportTokenModal setIsOpen={setIsModal} />}
        </Wrapper>
    );
};

export default LiveChart;
