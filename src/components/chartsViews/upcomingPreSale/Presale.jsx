import React from 'react';
import {HeadTitle, RightContent,} from "../tokenInformation/TokenInfoStyled";
import {
    Banner,
    BannerWrapper,
    Block,
    ContentWrapper,
    Flex,
    ParticipationButton,
    ParticipationWrapper,
    PerBnb,
    Text,
    Title,
    Value,
    Wrapper
} from './PreSaleStyled'

import {Button} from "../../common";

const PreSale = () => {
    const participationLink = () => console.log('participationLink')

    return (
        <Wrapper>
            <HeadTitle align={'center'} size={'30px'}>Presale information</HeadTitle>
            <ContentWrapper>
                <BannerWrapper>
                    <Banner>
                        <h5>
                            Addable Banner
                        </h5>
                    </Banner>
                    <Flex direction={'column'} content='center'>
                        <Flex items='center' margin={'0 0 20px 17px'}>
                            <Value margin={'0 21px 0 0'} weight={'500'} size={'21px'}>Token sale starts in:</Value>
                            <Text>13 d 24 h 50 min</Text>
                        </Flex>
                        <Button width={'277px'}>report this token to staff</Button>
                    </Flex>
                </BannerWrapper>
                <RightContent width={'400px'}>
                    <Title>token name</Title>
                    <Value>DotPad</Value>
                    <Title>token ticker</Title>
                    <Value>DPad</Value>
                    <Title>Launchpad</Title>
                    <Value>DxSale</Value>
                    <Title>contract address</Title>
                    <Value size={'15px'}>0xa27895467940fe37e461046870db5235b5977103</Value>
                    <Flex>
                        <Block>
                            <Title>soft cap</Title>
                            <Value>150 bnb</Value>
                        </Block>
                        <Block margin={'0 0 0 129px'}>
                            <Title>hard cap</Title>
                            <Value>300 bnb</Value>
                        </Block>
                    </Flex>
                    <Flex>
                        <Block>
                            <Title>min contribution</Title>
                            <Value>0.05 bnb</Value>
                        </Block>
                        <Block margin={'0 0 0 53px'}>
                            <Title>max contribution</Title>
                            <Value>2.00 bnb</Value>
                        </Block>
                    </Flex>
                    <Flex>
                        <Block>
                            <Title>LIQUIDITY LOCK RATIO</Title>
                            <Value>80%</Value>
                        </Block>
                        <Block margin={'0 0 0 38px'}>
                            <Title>LIQUIDITY LOCK period</Title>
                            <Value>12 months</Value>
                        </Block>
                    </Flex>
                    <Flex content={'space-between'}>
                        <Block>
                            <Title>presale price <PerBnb>per 1 BNB</PerBnb></Title>
                            <Value>6’000’000’000’000</Value>
                        </Block>
                        <Block>
                            <Title>listing price <PerBnb>per 1 BNB</PerBnb></Title>
                            <Value>4’500’000’000’000</Value>
                        </Block>
                    </Flex>
                    <ParticipationWrapper>
                        <Title>participation link</Title>
                        <ParticipationButton onClick={participationLink}>dxsale<span>Dx</span></ParticipationButton>
                    </ParticipationWrapper>
                </RightContent>
            </ContentWrapper>
        </Wrapper>
    );
};

export default PreSale;
