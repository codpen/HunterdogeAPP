import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import LogoImage from '../../images/big_logo.png'
import M from '../../images/m_white.png'
import Dialogue from '../../images/dialogue_ico.svg'
import Reward from '../../images/reward_ico.svg'
import Guard from '../../images/guard_white.svg'
import Like from '../../images/like_ico.svg'
import {BadgesWrapper, Card, HeadTitle, InfoWrapper, Inner, Label, Substrate, Text, Wrapper, IcoWrapper} from './TokeHeaderStyled'
import {Button, Flex, Image, LinkWrapper, Link_} from '../common'
import {Votes} from "../common/votes";
import {getMCap, getSymbol, getName} from '../../connection/functions'
import {useGoogleSheet} from '../../hooks/useGoogleSheet';
import {SHEET_ID} from "../../constants";

import {ReactComponent as Kyc} from "../../images/KYC.svg";
import {ReactComponent as Audit} from "../../images/Audit.svg";
import {ReactComponent as Utility} from "../../images/Utility.svg";
import {ReactComponent as Memecoin} from "../../images/Memecoin.svg";
import {ReactComponent as TokenPrice} from "../../images/tokenPrice.svg";
import {ReactComponent as MarketCap} from "../../images/marketCap.svg";
import {ReactComponent as Popularity} from "../../images/popularity.svg";

const TokenHeader = () => {
    const {address} = useParams()
    const visitWebsite = () => console.log('visit website')
    const {data} = useGoogleSheet(SHEET_ID, 60000)

    const [kyc, setKyc] = useState('')
    const [audit, setAudit] = useState('')
    const [utility, setUtility] = useState('')
    const [memecoin, setMemecoin] = useState('')

    const [price, setPrice] = useState(0)
    const [mcap, setMCap] = useState(0)
    const [symbol, setSymbol] = useState('')
    const [name, setName] = useState('')
    const [logo, setLogo] = useState('')

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
    }, [address])

    useEffect(() => {
        const getMarketCap = async () => {
            const mcap = await getMCap(address, price)
            console.log(mcap)
            setMCap(mcap)
        }
        getMarketCap()
    }, [price])

    useEffect(() => {
        data.map((row) => {
            console.log('row?.KYC', row?.KYC)
            if (row?.Project_Address?.toLowerCase() === address.toLowerCase()) {
                console.log(row?.Project_Logo)
                setLogo(row?.Project_Logo)
                setKyc(row?.KYC)
                setAudit(row?.Audit)
                setUtility(row?.Utility)
                setMemecoin(row?.Memecoin)
            }
        })
    }, [data])

    console.log(logo)

    return (
        <Wrapper>
            <BadgesWrapper>
                <Image src={logo.length < 1 ? LogoImage : logo} height={'162px'} margin={'14px 0 21px 0'}/>
                <LinkWrapper to='#'>
                    <Button weight={'700'} height='29px' onClick={visitWebsite}>
                        visit website
                    </Button>
                </LinkWrapper>
                <Flex margin={'20px 0 19px 0'}>
                    <Image src={M}/>
                    <Image src={M}/>
                    <Image src={M}/>
                    <Image src={M}/>
                </Flex>
                <HeadTitle size={'22px'}>earned badges</HeadTitle>
                <Flex justify="space-around" margin={'15px 0 0 0'}>
                    {kyc === 'TRUE' && 
                        <Kyc/>
                    }
                    {audit === 'TRUE' && 
                        <Audit/>
                    }
                    {utility === 'TRUE' && 
                        <Utility/>
                    }
                    {memecoin === 'TRUE' && 
                        <Memecoin/>
                    }           
                </Flex>
                <Flex margin={'15px 0 20px 0'}>
                    <Image src={Reward}/>
                    <Image src={Dialogue}/>
                    <Image src={Guard}/>
                </Flex>
                <Link_ to='#' size={'13px'} weight={'700'}>
                    what are badges?
                </Link_>
            </BadgesWrapper>
            <InfoWrapper>
                <Link_ to='#' size={'16px'} weight={'700'} margin={'0 0 21px auto'}>
                    + edit your token information
                </Link_>
                <Flex justify={'center'}>
                    <HeadTitle margin={'0 auto'} size={'50px'}>{name}</HeadTitle>
                    <Flex>
                        <Image height={'29px'} src={Like}/>
                        <Text margin={'0 0 0 7px'} size={'24px'}>156’093</Text>
                        <Votes big={true} address={address}/>
                    </Flex>
                </Flex>
                <Inner>
                    <Flex margin={'8px 0 40px 0'} items='flex-end'>
                        <Flex items='flex-start' direction='column'>
                            <Text>network</Text>
                            <Text margin={'19px 0 0 0'}>contract address</Text>
                        </Flex>
                        <Flex items='flex-start' direction='column'>
                            <HeadTitle size={'36px'}>bsc</HeadTitle>
                            <Text margin={'16px 0 0 0'}>{address}</Text>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Card>
                            <IcoWrapper><TokenPrice/></IcoWrapper>
                            <span>token price</span>
                            <p>${new Intl.NumberFormat('en-US').format(price)}</p>
                        </Card>
                        <Card>
                            <IcoWrapper mb={'40px'}><MarketCap/></IcoWrapper>
                            <span>market cap</span>
                            <p>${new Intl.NumberFormat('en-US').format(mcap)}</p>
                        </Card>
                        <Card color={'rgba(255, 218, 1, 0.25)'}>
                            <IcoWrapper><Popularity/></IcoWrapper>
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
