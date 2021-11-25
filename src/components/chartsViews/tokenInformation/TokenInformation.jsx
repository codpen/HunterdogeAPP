import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {
    ContentWrapper,
    DescText,
    DescTextWrapper,
    HeadTitle,
    HeadSubTitle,
    RightContent,
    Upcoming,
    Wrapper
} from "./TokenInfoStyled";
import {Button} from "../../common";
import {SHEET_ID} from "../../../constants";
import {useGoogleSheet} from '../../../hooks/useGoogleSheet';
import {Title, Value} from "../upcomingPreSale/PreSaleStyled";

const TokenInformation = () => {
    const {data} = useGoogleSheet(SHEET_ID, 60000);
    const {address} = useParams();
    const [descr, setDescr] = useState('')

    const pancakeSwap = () => console.log('pancakeswap')
    const plug = () => console.log('plug')
    // console.log('data info', data);
    useEffect(() => {
        data.map((row) => {
            // console.log(row?.Project_Description)
            if (row?.Project_Address?.toLowerCase() === address.toLowerCase()) {
                // console.log(row?.Project_Description)
                setDescr(row?.Project_Description)
            }
        })
    }, [data])

    return (
        <Wrapper>
            <ContentWrapper>
                    <HeadTitle >PROJECT DESCRIPTION</HeadTitle>
                    <DescTextWrapper>
                        {!descr && <HeadSubTitle>(coming soon)</HeadSubTitle>}
                        <DescText>
                            {descr}
                        </DescText>
                    </DescTextWrapper>
                <Button width={'277px'} margin={'0 0 10px 0'}>report this token to staff</Button>
            </ContentWrapper>
            <RightContent >
                <HeadTitle margin={'0 0 22px 0'}>TOKENOMICS</HeadTitle>
                <Title>MAX SUPPLY</Title>
                <Value>500’000’000’000’000’000</Value>
                <Title>BURN SUPPLY</Title>
                <Value>250’000’000’000’000’000</Value>
                <Title>PRE-SALE SUPPLY</Title>
                <Value>250’000’000’000’000’000</Value>
                <Title>TEAM TOKENS IN % OF MAX SUPPLY</Title>
                <Value>50%</Value>
                <Title>LIQUIDITY LOCK DATE</Title>
                <Value>UNTIL SEPT 25, 2021</Value>
                <Title>DATE OF LAUNCH</Title>
                <Value>SEPT 25, 2021</Value>
                <Value>TRANSACTION FEES</Value>
                <Title>BUY / SELL TAXES</Title>
                <Value>5% / 15%</Value>
                <Title>HOLDER REWARDS</Title>
                <Value>10% <Upcoming>(Rewards in USDT)</Upcoming></Value>
                <Title>LIQUIDITY FEES / MARKETING FEES</Title>
                <Value>3% / 5%</Value>
                {/*<button className={classes.stockBtn} onClick={pancakeSwap}>PANCAKESWAP*/}
                {/*    <Image src={Pancake} margin={'0 0 0 18px'}/>*/}
                {/*</button>*/}
            </RightContent>
        </Wrapper>
    );
};

export default TokenInformation;
