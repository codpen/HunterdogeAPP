import React from 'react';
import {useParams} from 'react-router-dom';
import {
    ContentWrapper,
    DescText,
    DescTextWrapper,
    HeadSubTitle,
    HeadTitle,
    RightContent,
    Upcoming,
    Wrapper
} from "./TokenInfoStyled";
import {Button} from "../../common";
import {Title, Value} from "../upcomingPreSale/PreSaleStyled";
import {useMediaQuery} from '@material-ui/core';

const TokenInformation = ({ tokenData = {} }) => {
    const { address } = useParams();
    const mobileMatches = useMediaQuery('(max-width:600px)');

    return (
        <Wrapper isMobile={mobileMatches}>
            <ContentWrapper>
                <HeadTitle >PROJECT DESCRIPTION</HeadTitle>
                <DescTextWrapper>
                    {!tokenData?.Project_Description && <HeadSubTitle>(coming soon)</HeadSubTitle>}
                    <DescText>
                        {tokenData?.Project_Description}
                    </DescText>
                </DescTextWrapper>
                <Button width={'277px'} margin={'0 0 10px 0'}>report this token to staff</Button>
            </ContentWrapper>
            <RightContent >
                <HeadTitle margin={'0 0 22px 0'}>TOKENOMICS</HeadTitle>
                <Title>MAX SUPPLY</Title>
                <Value>{new Intl.NumberFormat('en-US').format(tokenData?.Project_Token_Max)}</Value>
                <Title>BURN SUPPLY</Title>
                <Value>{new Intl.NumberFormat('en-US').format(tokenData?.Project_Token_Burn)}</Value>
                <Title>PRE-SALE SUPPLY</Title>
                <Value>{new Intl.NumberFormat('en-US').format(tokenData?.Project_Token_PreSale)}</Value>
                <Title>TEAM TOKENS IN % OF MAX SUPPLY</Title>
                <Value>{tokenData?.Project_Token_Team}</Value>
                <Title>LIQUIDITY LOCK DATE</Title>
                <Value>{tokenData?.Project_Token_LiquidityLockDate}</Value>
                <Title>DATE OF LAUNCH</Title>
                <Value>{tokenData?.Project_Token_LaunchDate}</Value>
                <Value>TRANSACTION FEES</Value>
                <Title>BUY / SELL TAXES</Title>
                <Value>{tokenData?.Project_Token_BuyTax}% / {tokenData?.Project_Token_SellTax}%</Value>
                <Title>HOLDER REWARDS</Title>
                <Value>{tokenData?.Project_Token_RewardFee}% <Upcoming>(Rewards in {tokenData?.Project_Token_RewardsCurr})</Upcoming></Value>
                <Title>LIQUIDITY FEES / MARKETING FEES</Title>
                <Value>{tokenData?.Project_Token_LiqFee}% / {tokenData?.Project_Token_MarketingFee}%</Value>
                {/*<button className={classes.stockBtn} onClick={pancakeSwap}>PANCAKESWAP*/}
                {/*    <Image src={Pancake} margin={'0 0 0 18px'}/>*/}
                {/*</button>*/}
            </RightContent>
        </Wrapper>
    );
};

export default TokenInformation;
