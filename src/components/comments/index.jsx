import React from 'react';
import styled from 'styled-components';
import logo from '../../images/hunter_logo.png';
import dots from '../../images/dots.png';
import up from '../../images/arr_up.png';
import down from '../../images/arr_down.png';

const Comment = ({show}) => {
    const report = () => console.log('report')
    const increment = () => console.log('increment')
    const decrement = () => console.log('decrement')
    return (
        <BlockComment>
            <Logo />
            <BlockMessage>
                <UserName>Chicofranchico</UserName>
                <Date>one month ago</Date>
                <Message>
                    <br/><br/>
                    <b>Great!!!!! </b>
                    <br/><br/>
                    Simply brilliant. Great value for $
                    <br/>
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
            <Actions>
                <Flex>
                    <Button onClick={report}>
                        Report         
                    </Button>
                    <ButtonCircle />
                    <ButtonUp onClick={increment}/>
                    <Count> +3 </Count>
                    <ButtonDown onClick={decrement} height={'35px'} width={'35px'}/>
                </Flex>
            </Actions>
        </BlockComment>
    )
}

const Comments = () => {
    return (
        <Block>
            <Title>COMMENTS (0) </Title>
            {/* <Comment />
            <Comment />
            <Comment show/>
            <CenterWrapper>
                <Show>Show more</Show>
                <ButtonDown height={'35px'} width={'35px'}/>
            </CenterWrapper> */}
        </Block>
    )
}

export default Comments;

const Block = styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
    margin-top: 120px;
    margin-bottom: 40px;
`

const Title = styled.h3`
    font-family: Monster Hunter Staggered;
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 98.1%;
    color: #B78300;
    border-bottom: 2px solid #FAF0CB;
    padding: 29px 0 24px 50px;
`

const BlockComment = styled.div`
    background: #FFFFFF;
    border-bottom: 2px solid #FAF0CB;
    display: flex;
    padding-right: 30px;
`

const Logo = styled.div`
    width: 49px;
    height: 49px;
    margin: 20px 10px 0 29px;
    background-image: url(${logo});
    background-size: 49px 49px;
`

const BlockMessage = styled.div`
    margin: 29px 0;
`

const UserName = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
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
`

const Message = styled(Date)``

const Actions = styled.div`
    margin-top: 30px;
    margin-left: auto;
`

const Button = styled.button`
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
`

const ButtonCircle = styled.button`
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
    background-image: url(${dots});
    margin-right: 29px;
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
    font-size: 17px;
    line-height: 98.1%;
    text-align: center;
    text-transform: uppercase;
    color: #B78300;
    margin-left: 22px;
    margin-right: 19px;
`
const Flex = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${({mt}) => mt || '0'};
`

const CenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    justify-content: center;
    padding-top: 11px;
    padding-bottom: 16px;
`

const Show = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: ${({size}) => size || '17px'};;
    line-height: 98.1%;
    text-transform: uppercase;
    color: #B78300;
    margin-right: ${({mr}) => mr || '0'};
`;
