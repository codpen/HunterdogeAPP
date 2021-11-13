import React from 'react';
import {Box} from "@mui/system";
import Pancake from "../../../images/pancakeswap.png";
import {useStyles} from "../liveChart/LiveChartStyles";
import {
    ContentWrapper,
    DescText,
    DescTextWrapper,
    Divider,
    Flex,
    HeadTitle,
    HeadSubTitle,
    RightContent,
    Title,
    Upcoming,
    Value,
    Wrapper
} from "./TokenInfoStyled";
import {Image} from "../../common";

const TokenInformation = () => {
    const classes = useStyles();

    const pancakeSwap = () => console.log('pancakeswap')
    const plug = () => console.log('plug')

    return (
        <Wrapper>
            <ContentWrapper>
                <HeadTitle>PROJECT DESCRIPTION</HeadTitle>
                <HeadSubTitle>(coming soon)</HeadSubTitle>
                <DescTextWrapper>
                    <DescText>
                        1. Cardence is World's first decentralised launchpad to offer release of token as per vesting schedule, create presale only for whitelisted wallet, affiliate marketing option for projects, liquidity locking, smart mint features, staking, assured IDOs , guaranteed participation for everyone all at one place.
                        <br/><br/>
                        2. Smart contract audited by techrate and can be seen here -https://github.com/TechRate/Smart-Contract-Audits
                        <br/><br/>
                        3.Doxed dev and reputed advisors, all info is public and can be seen on cardence.io
                        <br /><br/>
                        1. Cardence is World's first decentralised launchpad to offer release of token as per vesting schedule, create presale only for whitelisted wallet, affiliate marketing option for projects, liquidity locking, smart mint features, staking, assured IDOs , guaranteed participation for everyone all at one place.
                        <br /><br/>
                        2. Smart contract audited by techrate and can be seen here -https://github.com/TechRate/Smart-Contract-Audits
                        <br /><br/>
                        3.Doxed dev and reputed advisors, all info is public and can be seen on cardence.io
                        <br /><br/>
                        1. Cardence is World's first decentralised launchpad to offer release of token as per vesting schedule, create presale only for whitelisted wallet, affiliate marketing option for projects, liquidity locking, smart mint features, staking, assured IDOs , guaranteed participation for everyone all at one place.
                        <br /><br/>
                        2. Smart contract audited by techrate and can be seen here -https://github.com/TechRate/Smart-Contract-Audits
                        <br /><br/>
                        3.Doxed dev and reputed advisors, all info is public and can be seen on cardence.io
                    </DescText>
                </DescTextWrapper>
                {/* <Flex>
                    <button onClick={plug} className={classes.redBtn} style={{color: 'white'}}>
                        report this token to staff
                    </button>
                    <button onClick={plug} className={classes.beigeBtn} style={{color: '#AB882E'}}>
                        SHARE $HUNT
                    </button>
                </Flex> */}
            </ContentWrapper>
            <Divider />
            <RightContent >
                <HeadTitle style={{ marginBottom: '30px' }}>TOKENOMICS</HeadTitle>
                <Title>MAX SUPPLY</Title>
                <Value>500’000’000’000’000’000</Value>
                <Title>Burn supply</Title>
                <Value>250’000’000’000’000’000</Value>
                <Title>PRE-SALE SUPPLY</Title>
                <Value>250’000’000’000’000’000</Value>
                <Title>TEAM TOKENS IN % OF MAX SUPPLY</Title>
                <Value>500’000’000’000’000’000</Value>
                <Title>USAGE OF REMAINING SUPPLY</Title>
                <Value>AIRDROPS, STAKING</Value>
                <Title>LIQUIDITY LOCK RATIO</Title>
                <Value>80%</Value>
                <Title>DATE OF LAUNCH</Title>
                <Value>SEPT 25, 2021 <Upcoming>(upcoming pre-sale)</Upcoming></Value>
                <Value>WHERE TO BUY</Value>
                <button className={classes.stockBtn} onClick={pancakeSwap}>PANCAKESWAP
                    <Image src={Pancake} margin={'0 0 0 18px'}/>
                </button>
            </RightContent>
        </Wrapper>
    );
};

export default TokenInformation;
