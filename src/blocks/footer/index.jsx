import React from 'react';
import {Link} from "react-router-dom";
//styles
import {Flex, Image} from "../../components/common";
import {FooterMain, Text, Button, Title, ImageWrapper,SocialWrapper, LinkStyled, LinkFooter} from "./FooterStyled";
//icons
import Telegram from "../../images/socialBg/telegram.svg";
import Twitter from "../../images/socialBg/twitter.svg";
import Instagram from "../../images/socialBg/instagram.svg";
import Reddit from "../../images/socialBg/reddit.svg";
import Medium from "../../images/socialBg/medium.svg";
import Logo from '../../images/big_logo.png';
import hunterdogeBook from '../../images/hunterdoge_book.png';

const Footer = () => {
    const submit = () => console.log('submit');
    return (
        <FooterMain>
            <Flex direction={'column'}>
                <Flex mwidth={'460px'}>
                    <LinkStyled href='/'>
                        <Image src={Logo} width={'94px'} height={'94px'} margin={'0 35px 0 0'}/>
                    </LinkStyled>
                    <LinkStyled href='/'>
                        <Title size={'61px'}>HunterDoge</Title>
                    </LinkStyled>
                </Flex>
                <SocialWrapper>
                    <LinkStyled href='https://t.me/hunterdogeofficial' target="_blank"><Image src={Telegram}/></LinkStyled>
                    <LinkStyled href='https://twitter.com/hunterdoge_' target="_blank"><Image src={Twitter}/></LinkStyled>
                    <LinkStyled href='https://www.instagram.com/hunterdogeofficial/' target="_blank"><Image src={Instagram}/></LinkStyled>
                    <LinkStyled href='https://www.reddit.com/user/hunterdoge_?utm_source=share&utm_medium=ios_app&utm_name=iossmf' target="_blank"><Image src={Reddit}/></LinkStyled>
                    <LinkStyled href='https://medium.com/@hunterdoge' target="_blank"><Image src={Medium}/></LinkStyled>
                </SocialWrapper>
            </Flex>
            <Flex direction={'column'}>
                <Title size={'30px'} mtop={'22px'}>Quick links</Title>
                <Text to='/allTokens'>All Tokens</Text>
                <Text to='/'>All Pre-Sales</Text>
            </Flex>
            <Flex direction={'column'}>
                <Title size={'30px'} mtop={'22px'}>Documents</Title>
                <LinkFooter href='/'>Whitepaper</LinkFooter>
                <LinkFooter href='https://ipfs.io/ipfs/QmdWZEMvNximaswhn3p6qTsioBASgGLx2QRMkDcXNrVxoG?filename=Techpaper_HunterDoge_v1.0.0.pdf' target="_blank">Tech paper</LinkFooter>
            </Flex>
            <Flex>
                <Flex direction={'column'}>
                    <Title size={'30px'} mtop={'22px'}>Contact</Title>
                    <LinkFooter href="mailto:info@hunterdoge.com" target="_blank">info@hunterdoge.com</LinkFooter>
                    <Button onClick={submit}>Submit your Coin</Button>
                </Flex>
                <ImageWrapper>
                    <Image src={hunterdogeBook}/>
                </ImageWrapper>
            </Flex>
        </FooterMain>
    );
};

export default Footer;
