import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import LogoImage from '../../images/big_logo.png'
import M from '../../images/M.png'
import Dialogue from '../../images/dialogue_ico.svg'
import Reward from '../../images/reward_ico.svg'
import {BadgesWrapper, Card, HeadTitle, InfoWrapper, Inner, Label, Substrate, Text, Wrapper} from './TokeHeaderStyled'
import {Button, Flex, Image} from '../common'
import {Votes} from "../common/votes";
import { getMCap, getSymbol, getName } from '../../connection/functions'

const TokenHeader = () => {
    const {address} = useParams()
    const visitWebsite = () => console.log('visit website')

    const [price, setPrice] = useState(0)
    const [mcap, setMCap] = useState(0)
    const [symbol, setSymbol] = useState('')
    const [name, setName] = useState('')

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
            const symbol = await getSymbol(address)
            setSymbol(symbol)
            const name = await getName(address)
            setName(name)
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

    return (
        <Wrapper>
            <BadgesWrapper>
                <Image src={LogoImage} height={'140px'} margin={'0 0 21px 0'}/>
                <Button weight={'700'} onClick={visitWebsite}>
                    visit website
                </Button>
                <Flex margin={'20px 0 19px 0'}>
                    <Image src={M}/>
                    <Image src={M}/>
                    <Image src={M}/>
                    <Image src={M}/>
                </Flex>
                <HeadTitle size={'22px'}>earned badges</HeadTitle>
                <Flex margin={'15px 0 0 0'}>
                    <Image src={Reward}/>
                    <Image src={Dialogue}/>
                    <Image src={Dialogue}/>
                </Flex>
                <Flex margin={'15px 0 20px 0'}>
                    <Image src={Reward}/>
                    <Image src={Dialogue}/>
                    <Image src={Dialogue}/>
                </Flex>
                <Text size={'13px'} weight={'700'}>what are badges?</Text>
            </BadgesWrapper>
            <InfoWrapper>
                <Flex justify={'start'}>
                    <HeadTitle size={'50px'}>{name}</HeadTitle>
                    <Label>{symbol}</Label>
                    <Flex left>
                        <Votes big={true} address={address}/>
                        <Substrate padding={'10px 20px'} bg={'#B78300'}>
                            0
                        </Substrate>
                    </Flex>
                </Flex>
                <Inner>
                    <Flex justify={'start'}>
                        <Text>network</Text>
                        <Substrate margin={'0 400px 0 auto'} padding={'10px 30px'}>
                            <HeadTitle size={'27px'}>bsc</HeadTitle>
                        </Substrate>
                    </Flex>
                    <Flex margin={'17px 0 26px 0'}>
                        <Text>contract address</Text>
                        <Substrate>
                            <Text>{address}</Text>
                        </Substrate>
                    </Flex>
                    <Flex>
                        <Card>
                            <div/>
                            <span>token price</span>
                            <p>${new Intl.NumberFormat('en-US').format(price)}</p>
                        </Card>
                        <Card>
                            <div/>
                            <span>market cap</span>
                            <p>${new Intl.NumberFormat('en-US').format(mcap)}</p>
                        </Card>
                        <Card color={'#DFFFE8'}>
                            <div/>
                            <span>popularity</span>
                            <p>MEDIUM</p>
                        </Card>
                    </Flex>
                </Inner>
            </InfoWrapper>
        </Wrapper>
    );
};

export default TokenHeader;
