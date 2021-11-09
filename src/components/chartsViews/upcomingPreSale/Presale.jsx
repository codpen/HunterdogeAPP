import React from 'react';
import {
    Divider,
    HeadTitle,
    RightContent,
    Wrapper
} from "../tokenInformation/TokenInfoStyled";
import {Dribble, Instagram, Medium, Telegram, Twitter} from "../../SocialLink/socials/Socials";
import {
    ContentWrapper,
    SocialWrapper,
    Value,
    Title,
    Text,
    ActionButton,
    ActionGoal,
    ActionTitle,
    ActionWrapper,
    Banner,
    BannerWrapper,
    Block,
    Flex,
    ParticipationButton,
    ParticipationWrapper,
    PerBnb
} from './PreSaleStyled'

const PreSale = () => {

    const website = () => console.log('website')
    const bscScan = () => console.log('bscScan')
    const participationLink = () => console.log('participationLink')

    return (
        <Wrapper>
            <ContentWrapper>
                <HeadTitle>PROJECT DESCRIPTION</HeadTitle>
                <BannerWrapper>
                    <Banner>
                        <h5>
                            addable (free) pre-sale banner
                            or simply the logo of the project centered
                        </h5>
                    </Banner>
                    <ActionWrapper>
                        <ActionTitle>
                            Token Sale starts
                            <br/>in<br/>
                            24 DAYS 7 HOURS
                        </ActionTitle>
                        <ActionGoal>300 BNB</ActionGoal>
                        <Value>hardcap goal</Value>
                        <ActionButton onClick={website}>WEBSITE</ActionButton>
                        <ActionButton onClick={bscScan}>BSC-Scan</ActionButton>
                        <SocialWrapper>
                            <Telegram/>
                            <Twitter/>
                            <Instagram/>
                            <Dribble/>
                            <Medium/>
                        </SocialWrapper>
                    </ActionWrapper>
                </BannerWrapper>
                <BannerWrapper margin={'0'}>
                    <Text>
                        1. Cardence is World's first decentralised launchpad to offer release of token as per vesting
                        schedule, create presale only for
                        whitelisted wallet, affiliate marketing option for projects, liquidity locking, smart mint
                        features,
                        staking, assured IDOs ,
                        guaranteed participation for everyone all at one place. 1. Cardence is World's first
                        decentralised
                        launchpad to offer release of
                        token as per vesting schedule, create presale only for whitelisted wallet, affiliate marketing
                        option for projects, liquidity locking,
                        smart mint features, staking, assured IDOs , guaranteed participation for everyone all at one
                        place.1. Cardence is World's first
                        decentralised launchpad to offer release of token as per vesting schedule, create presale only
                        for
                        whitelisted wallet,
                        affiliate marketing option for projects, liquidity locking, smart mint features, staking,
                        assured
                        IDOs , guaranteed
                        participation for everyone all at one place.
                    </Text>
                    <ParticipationWrapper>
                        <Title>participation link</Title>
                        <ParticipationButton onClick={participationLink}>dxsale<span>Dx</span></ParticipationButton>
                    </ParticipationWrapper>
                </BannerWrapper>
            </ContentWrapper>
            <Divider/>
            <RightContent>
                <HeadTitle style={{marginBottom: '30px'}}>information</HeadTitle>
                <Flex>
                    <Block>
                        <Title>token name</Title>
                        <Value>DotPad</Value>
                    </Block>
                    <Block margin={'0 0 0 104px'}>
                        <Title>sale ID</Title>
                        <Value>54642</Value>
                    </Block>
                </Flex>
                <Title>token ticker</Title>
                <Value>DPad</Value>
                <Title>token contract address</Title>
                <Value size={'15px'}>0xa27895467940fe37e461046870db5235b5977103</Value>
                <Title>pre-sale contract</Title>
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
                <Flex>
                    <Block>
                        <Title>presale price <PerBnb>per 1 BNB</PerBnb></Title>
                        <Value>6’000’000’000’000</Value>
                    </Block>
                    <Block margin={'0 0 0 23px'}>
                        <Title>listing price <PerBnb>per 1 BNB</PerBnb></Title>
                        <Value>4’500’000’000’000</Value>
                    </Block>
                </Flex>
            </RightContent>
        </Wrapper>
    );
};

export default PreSale;
