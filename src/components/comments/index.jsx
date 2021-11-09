import React from 'react';
import styled from 'styled-components';
import logo from '../../images/hunter_logo.png';

const Comment = () => {
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
            </BlockMessage>
            <Actions />
        </BlockComment>
    )
}

const Comments = () => {
    return (
        <Block>
            <Title>COMMENTS (88) </Title>
            <Comment />
            <Comment />
            <Comment />
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
`

const Logo = styled.div`
    width: 49px;
    height: 49px;
    margin: 29px 10px 0 29px;
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
    /* identical to box height, or 17px */

    text-transform: uppercase;

    /* titel */

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

const Actions = styled.div``
