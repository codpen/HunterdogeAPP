import React from 'react';
import styled from 'styled-components';
import logo from '../../images/hunter_logo.png';
import dots from '../../images/dots.png';
import up from '../../images/arr_up.png';
import down from '../../images/arr_down.png';
import {Button, Flex, Image} from '../common';

const Comment = ({show}) => {
    const report = () => console.log('report')
    const increment = () => console.log('increment')
    const decrement = () => console.log('decrement')
    return (
        <BlockComment>
            <Flex>
                <Flex direction={'column'} margin={'0 25px 0 0'}>
                    <Image src={logo} width={'103'}/>
                    <UserName>Chicofranchico</UserName>
                </Flex>
                
                <BlockMessage>
                    
                    {/* <Date>one month ago</Date> */}
                    <Message>
                        <b>Great!!!!! </b>
                        <br/><br/>
                        Simply brilliant. Great value for $
                        <br/><br/>
                        +Everything
                        <br/>
                        -None (so far)

                    </Message>
                    {show && (
                        <Flex mt={'14px'}>
                            <Show size={'12px'} mr={'8px'}>Show all</Show>
                            <ButtonDown height={'25px'} width={'25px'}/>
                        </Flex>
                    )}
                </BlockMessage>
            </Flex>
            
            <Actions>
                <Flex>
                    <Button onClick={report} width={'86px'} bg={'#AB882E'} margin={'0 12px 0 0'}>
                        Report         
                    </Button>
                    <ButtonCircle margin={'0 12px 0 0'}><RotateText rotate={'rotate(90deg)'} size={'35px'} pb={'20px'}>...</RotateText></ButtonCircle>
                    <ButtonCircle onClick={increment}><RotateText>V</RotateText></ButtonCircle>
                    <Count> +3 </Count>
                    <ButtonCircle onClick={decrement} ><RotateText rotate={'rotate(180deg)'}>V</RotateText></ButtonCircle>
                    {/* <ButtonCircle />
                    <ButtonUp onClick={increment}/>
                    <Count> +3 </Count>
                    <ButtonDown onClick={decrement} height={'35px'} width={'35px'}/> */}
                </Flex>
                <Date>one month ago</Date>
            </Actions>
        </BlockComment>
    )
}

const Comments = () => {
    return (
        <Block>
            <Title>COMMENTS (88) </Title>
            <Comment />
            <Comment />
            {/* <Comment show/> */}
            <CenterWrapper>
                <Button width={'161px'} bg={'#AB882E'}>Show more</Button>
                {/* <ButtonDown height={'35px'} width={'35px'}/> */}
            </CenterWrapper>
        </Block>
    )
}

export default Comments;

const Block = styled.div`
    background: #FFFFFF;
    border: 2px solid rgba(183, 131, 0, 0.3);
    border-radius: 25px;
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
    margin-top: 120px;
    margin-bottom: 40px;
    padding: 20px 39px 19px 47px;
    max-width: 1039px
`

const Title = styled.p`
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 98.1%;
    color: #B78300;
    /* padding: 29px 0 24px 50px; */
`

const BlockComment = styled.div`
    margin-top: 17px;   
    background: #FFFFFF;
    /* border-bottom: 2px solid #FAF0CB; */
    display: flex;
    padding: 15px 30px;
    background: #FFF8CC;
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
`


const BlockMessage = styled.div`
    margin: 0 0;
`

const UserName = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 13px;
    line-height: 98.1%;
    text-transform: uppercase;
    color: #B78300;
`;

const Date = styled.div`

    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 98.1%;

    color: #B78300;
    margin-left: auto;
    margin-top: auto;
`

const Message = styled(Date)``

const Actions = styled.div`
    margin-top: 0;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-space-between
`

/* const Button = styled.button`
    width: 107px;
    height: 38px;
    background: #fff;
    box-shadow: 3px 4px 0px rgba(0, 0, 0, 0.1);
    border: none;
    cursor: pointer;
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 17px;
    text-align: center;
    color: #EE7541;
    margin-right: 13px;
` */

const ButtonCircle = styled.button`
    width: 35px;
    height: 35px;
    background: #AB882E;
    box-shadow: 3px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border: none;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    margin: ${({margin}) => margin || '0'};
    /* font-size: ${({size}) => size || '20px'};
    line-height: 98.1%; */
    /* identical to box height, or 20px */
    
    text-align: center;

    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 35px;
    height: 35px;
    background-color: #fff;
    box-shadow: 3px 4px 0px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 17px;
    text-align: center;
    color: #EE7541;
    background-image: url(${dots});
    margin-right: 29px; */
`

const RotateText = styled.p`
    transform: ${({rotate}) =>  rotate ||'rotate(0deg)'};
    font-size: ${({size}) => size || '20px'};
    line-height: ${({size}) => size || '20px'};
    padding-bottom: ${({pb}) => pb || '0'};
`

const ButtonUp = styled.button`
    width: 35px;
    height: 35px;
    background-color: #fff;
    box-shadow: 3px 4px 0px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 17px;
    text-align: center;
    color: #EE7541;
    background-image: url(${up});
`

const ButtonDown = styled.button`
    width: ${({width}) => width};
    height: ${({height}) => height};
    background-color: #fff;
    box-shadow: 3px 4px 0px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: #EE7541;
    background-image: url(${down});
    background-size: contain;
`

const Count = styled.p`
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 98.1%;
    text-align: center;
    text-transform: uppercase;
    color: #B78300;
    margin-left: 22px;
    margin-right: 19px;
`
/* const Flex = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${({mt}) => mt || '0'};
` */

const CenterWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    justify-content: center;
`

const Show = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: ${({size}) => size || '17px'};
    line-height: 98.1%;
    text-transform: uppercase;
    color: #B78300;
    margin-right: ${({mr}) => mr || '0'};
`;
