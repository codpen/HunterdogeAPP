import React, { useState, useEffect } from 'react';
import { AdvancedChart } from "react-tradingview-embed";
import { useParams } from 'react-router-dom'
import Pancake from "../../../images/pancakeswap.png";
import {
    ChartWrapper,
    LiveChartSubtitle,
    LiveChartTitle,
    Wrapper,
    Title,
    Value,
    Changes24, Good, Tab, LinkWrapper
} from "./LiveChartStyles";
import { getMCap, getSymbol, getPair, getBalanceWBNB } from '../../../connection/functions'
import { Flex } from "../upcomingPreSale/PreSaleStyled";
import { HeadTitle, RightContent } from "../tokenInformation/TokenInfoStyled";
import { getPrice24H } from "../../../utils/getPrice24H";
import { changeFormatter } from "../../../utils/changeFormatter";
import { Button, Image } from "../../common";
import ReportTokenModal from '../../modal/ReportToken';
import { Stack, Box } from '@mui/material';
import { usePrice } from '../../../hooks/usePrice';
import { bscWBNBContact } from '../../../connection/contracts';

const Dashboard = ({ token }) => {
    const [query, setQuery] = useState('BNB')
    const [isComingSoon, setIsComingSoon] = useState(true)
    // console.log(query)
    useEffect(() => {
        setQuery(token)
    }, [token])
    return (
        <Stack component='div' sx={{ position: 'relative' }}>
            {
                isComingSoon &&
                <Stack
                    component='div'
                    sx={{ position: 'absolute', width: '100%', height: '466px', zIndex: 1, backdropFilter: 'blur(3px)' }}
                >
                    <Box component='h2' sx={{ fontSize: '60px', m: 'auto' }}>
                        Coming Soon.
                    </Box>
                </Stack>
            }
            <AdvancedChart widgetProps={{ "theme": "dark", symbol: query + "USD", height: '466px' }} />
        </Stack>
    );
}

const LiveChart = ({ tokenData = {} }) => {
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
        <Wrapper>
            <ChartWrapper>
                <Flex margin={'0 0 5px 0'}>
                    <LiveChartTitle>LIVE CHART</LiveChartTitle>
                    <LiveChartSubtitle>PAIR {symbol} - BNB</LiveChartSubtitle>
                </Flex>
                <Dashboard token={symbol} />
                <Button onClick={() => setIsModal(true)} margin={'25px 0 0 0'} width={'277px'}>report this token to staff</Button>
            </ChartWrapper>
            <RightContent margin={'0 0 0 31px'}>
                <HeadTitle margin={'0 0 31px 0'} align={'center'} size={'30px'}>statistics</HeadTitle>
                <Title>Max supply</Title>
                <Value>{tokenData?.Project_Token_Max}</Value>
                <Title>Market cap</Title>
                <Value>${new Intl.NumberFormat('en-US').format(mcap)}</Value>
                <Title>Current price in USD</Title>
                <Flex>
                    <Value>${new Intl.NumberFormat('en-US').format(price.toFixed(4))}</Value>
                    {change24h && <Changes24 up={change24h.up}>{change24h.text}</Changes24>}
                </Flex>
                <Flex>
                    <Flex direction={'column'}>
                        <Title>Total liquidity</Title>
                        <Value>${new Intl.NumberFormat('en-US').format(totalLP.toFixed(4))}</Value>
                    </Flex>
                    <Flex direction={'column'} margin={'0 0 0 64px'}>
                        <Title>Liquidity / Mcap ratio</Title>
                        <Flex>
                            <Value>${new Intl.NumberFormat('en-US').format(ratio.toFixed(4))}</Value>
                            {/*<Good>good</Good>*/}
                        </Flex>
                    </Flex>
                </Flex>
                {[0].map((el, idx) => <Flex key={idx * 23} content={'space-between'}>
                    <Flex direction={'column'}>
                        <Title size={'12px'}>Pc v2 | {symbol}/BNB LP Holdings</Title>
                        <Flex>
                            <Value size={'12px'}>
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
