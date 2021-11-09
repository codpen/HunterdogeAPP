import React from 'react';
import styled from "styled-components";
import LogoImage from '../../images/hunter_logo.png'
import M from '../../images/M.png'
import Dialogue from '../../images/dialogue_ico.svg'
import Reward from '../../images/reward_ico.svg'

export const Wrapper = styled.div`
  max-width: 1040px;
  height: 466px;
  padding: 26px 21px 21px 21px;
  margin-bottom: 32px;
  background: #FFDA01;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
`

export const BadgesWrapper = styled.div`
  width: 143px;
  display: flex;
  flex-direction: column;
`

export const InfoWrapper = styled.div`
  max-width: 826px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

export const Inner = styled.div`
  width: 100%;
  height: 342px;
  background: #FFFFFF;
  
  padding: 20px 27px 19px 27px;
  
  border: 2px solid #B78300;
  box-sizing: border-box;
  border-radius: 25px;
  
  margin-top: auto;
`

export const HeadTitle = styled.h3`
  font-size: ${({size}) => size || 'inherit'};
  line-height: ${({size}) => size || 'inherit'};
`

export const Substrate = styled.div`
  display: flex;
  padding: ${({padding}) => padding || '12px 22px'};
  background: #FAF0CB;
  border-radius: 25px;
  margin: ${({margin}) => margin || '0'};
  box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1);
`

export const Label = styled.h4`
  width: 152px;
  height: 56px;
  padding-top: 6px;
  margin-left: 22px;
  
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  line-height: 98.1%;
  color: #B78300;

  background: #FFFFFF;
  border: 1.4px solid #B78300;
  border-radius: 18px;
  box-shadow: 3.6px 3.6px 0 rgba(0, 0, 0, 0.1);
`



export const Card = styled.div`
  font-family: Raleway;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 72.13px;
    height: 72.13px;
    border-radius: 50%;
    background: #AB882E;
    
    margin-bottom: 22px;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 18.5px;
    line-height: 18px;
    text-transform: uppercase;
    color: #B78300;
    margin-bottom: 9px;
  }
  p {
    width: 176px;
    height: 42px;
    background: ${({color}) => color || '#FAF0CB'};
    border-radius: 25px;
    
    box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1);
    
    padding: 11px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #B78300;
  }
`

export const Text = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: ${({weight}) => weight || '600'};
  font-size: ${({size}) => size || '18px'};
  line-height: ${({size}) => size || '18px'};
  text-transform: uppercase;
  color: #AB882E;
`

export const Flex = styled.div`
  display: flex;
  justify-content: ${({justify}) => justify || 'start'};
  align-items: center;
  margin: ${({margin}) => margin || '0'};
`

export const Button = styled.button`
  width: 100%;
  height: ${({height}) => height || '36px'};
  border: none;
  cursor: pointer;
  background: #B78300;
  box-sizing: border-box;
  border-radius: 25px;
  font-size: ${({size}) => size || '15px'};
  line-height: ${({size}) => size || '15px'};

  font-family: Raleway;
  font-style: normal;
  font-weight: ${({weight}) => weight || '500'};

  text-align: center;
  text-transform: uppercase;
  box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1);
  color: #FFFFFF;
`

const Image = styled.img.attrs(props => ({
    src: props.src || Image,}))`
  width: ${({width}) => width || '100%'};
  height: ${({height}) => height}
`;

const TokenHeader = () => {
    const visitWebsite = () => console.log('visit website')

    return (
        <Wrapper>
            <BadgesWrapper>
                <Image src={LogoImage}/>
                <Button weight={'700'} onClick={visitWebsite}>
                    visit website
                </Button>
                <Flex>
                    <Image src={M}/>
                    <Image src={M}/>
                    <Image src={M}/>
                    <Image src={M}/>
                </Flex>
                <Flex justify={'space-between'}>
                    <Image src={Reward} width={'22px'}/>
                    <Image src={Dialogue} width={'35px'}/>
                    <Image src={Dialogue} width={'35px'}/>
                </Flex>
                <Flex justify={'space-between'}>
                    <Image src={Reward} height={'35px'}/>
                    <Image src={Dialogue} height={'35px'}/>
                    <Image src={Dialogue} height={'35px'}/>
                </Flex>
            </BadgesWrapper>
            <InfoWrapper>
                <Flex>
                    <HeadTitle size={'50px'}>hunterdoge</HeadTitle>
                    <Label>$HUNT</Label>
                </Flex>
                <Inner>
                    <Flex>
                        <Text>network</Text>
                        <Substrate margin={'0 400px 0 auto'}  padding={'10px 30px'}>
                            <HeadTitle size={'27px'}>bsc</HeadTitle>
                        </Substrate>
                    </Flex>
                    <Flex justify={'space-between'} margin={'17px 0 26px 0'}>
                        <Text>contract address</Text>
                        <Substrate>
                            <Text>0xfa17b330bcc4e7f3e2456996d89a5a54ab044831</Text>
                        </Substrate>
                    </Flex>
                    <Flex justify={'space-between'}>
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
