import React from 'react';
import LogoImage from '../../images/big_logo.png'
import M from '../../images/M.png'
import Dialogue from '../../images/dialogue_ico.svg'
import Reward from '../../images/reward_ico.svg'
import Like from '../../images/like_ico.svg'
import {
    Wrapper,
    HeadTitle,
    Substrate,
    Text,
    BadgesWrapper,
    Card,
    InfoWrapper,
    Inner,
    Label
} from './TokeHeaderStyled'
import {Button,Flex, Image,ButtonRed, ButtonGreen, ButtonYellow} from '../common'

const TokenHeader = () => {
    const visitWebsite = () => console.log('visit website')
    const vote = () => console.log('vote')

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
                    <HeadTitle size={'50px'}>hunterdoge</HeadTitle>
                    <Label>$HUNT</Label>
                    <Flex left>
                        {/*<Image src={Like} height={'28px'} margin={'0 8.5px 0 0'}/>*/}
                        {/*<Text size={'24px'}>156’093</Text>*/}
                        {/*<Button*/}
                        {/*    onClick={vote}*/}
                        {/*    size={'20px'}*/}
                        {/*    weight={'500'}*/}
                        {/*    width={'104px'}*/}
                        {/*    height={'47px'}*/}
                        {/*    margin={'0 0 0 16px'}*/}
                        {/*>Vote*/}
                        {/*</Button>*/}

                        <ButtonRed
                            onClick={vote}
                            size={'17px'}
                            weight={'500'}
                            width={'90px'}
                            height={'37px'}
                            margin={'0 0 0 16px'}
                        >Vote - 1
                        </ButtonRed>
                        <ButtonYellow
                            onClick={vote}
                            size={'17px'}
                            weight={'500'}
                            width={'90px'}
                            height={'37px'}
                            margin={'0 0 0 16px'}
                        >Vote + 1
                        </ButtonYellow>
                        <ButtonGreen
                            onClick={vote}
                            size={'17px'}
                            weight={'500'}
                            width={'90px'}
                            height={'37px'}
                            margin={'0 12px 0 16px'}
                        >Vote + 2
                        </ButtonGreen>
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
                            <Text>0xfa17b330bcc4e7f3e2456996d89a5a54ab044831</Text>
                        </Substrate>
                    </Flex>
                    <Flex>
                        <Card>
                            <div/>
                            <span>token price</span>
                            <p>$0.0000005</p>
                        </Card>
                        <Card>
                            <div/>
                            <span>market cap</span>
                            <p>$999’999</p>
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
