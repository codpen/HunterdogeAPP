import React from 'react';
import {HeadTitle, RightContent,} from "../tokenInformation/TokenInfoStyled";
import { useParams } from 'react-router-dom'
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

const PreSale = ({tokenData={}}) => {
    const participationLink = () => {
        window.location.href = tokenData.Project_Presale_Link
    }
    const {address} = useParams()

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
                    <Value>{tokenData.Project_Name}</Value>
                    <Title>token ticker</Title>
                    <Value>{tokenData.Project_Symbol}</Value>
                    <Title>Launchpad</Title>
                    <Value>{tokenData.Project_Presale_Launchpad}</Value>
                    <Title>contract address</Title>
                    <Value size={'15px'}>{address}</Value>
                    <Flex>
                        <Block>
                            <Title>soft cap</Title>
                            <Value>{tokenData.Project_Presale_SC}</Value>
                        </Block>
                        <Block margin={'0 0 0 129px'}>
                            <Title>hard cap</Title>
                            <Value>{tokenData.Project_Presale_HC}</Value>
                        </Block>
                    </Flex>
                    <Flex>
                        <Block>
                            <Title>min contribution</Title>
                            <Value>{tokenData.Project_Presale_MinContr}</Value>
                        </Block>
                        <Block margin={'0 0 0 53px'}>
                            <Title>max contribution</Title>
                            <Value>{tokenData.Project_Presale_MaxContr}</Value>
                        </Block>
                    </Flex>
                    <Flex>
                        <Block>
                            <Title>LIQUIDITY LOCK RATIO</Title>
                            <Value>{tokenData.Project_Presale_LiqLock}</Value>
                        </Block>
                        <Block margin={'0 0 0 38px'}>
                            <Title>LIQUIDITY LOCK period</Title>
                            <Value>{tokenData.Project_Presale_LiqLockTime}</Value>
                        </Block>
                    </Flex>
                    <Flex content={'space-between'}>
                        <Block>
                            <Title>presale price <PerBnb>per 1 BNB</PerBnb></Title>
                            <Value>{tokenData.Project_Presale_Price}</Value>
                        </Block>
                        <Block>
                            <Title>listing price <PerBnb>per 1 BNB</PerBnb></Title>
                            <Value>{tokenData.Project_Presale_ListingPrice}</Value>
                        </Block>
                    </Flex>
                    <ParticipationWrapper>
                        <Title>participation link</Title>
                        <ParticipationButton disabled={!tokenData.Project_Presale_Link} onClick={participationLink}>dxsale<span>Dx</span></ParticipationButton>
                    </ParticipationWrapper>
                </RightContent>
            </ContentWrapper>
        </Wrapper>
    );
};

export default PreSale;
