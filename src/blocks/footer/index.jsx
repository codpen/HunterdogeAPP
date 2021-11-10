import React from 'react';
import {Link} from "react-router-dom";
//styles
import {Flex, Image} from "../../components/common";
import {FooterMain, Text, Button, Title, ImageWrapper,SocialWrapper} from "./FooterStyled";
//icons
import Telegram from "../../images/socialBg/telegram.svg";
import Twitter from "../../images/socialBg/twitter.svg";
import Instagram from "../../images/socialBg/instagram.svg";
import Reddit from "../../images/socialBg/reddit.svg";
import Medium from "../../images/socialBg/medium.svg";
import Logo from '../../images/big_logo.png';
import hunterdogeBook from '../../images/hunterdoge_book.png';

const Footer = () => {
    return (
        <FooterMain>
            <Flex direction={'column'}>
                <Flex mwidth={'460px'}>
                    <Image src={Logo} width={'94px'} height={'94px'} margin={'0 35px 0 0'}/>
                    <Title size={'61px'}>HunterDoge</Title>
                </Flex>
                <SocialWrapper>
                    <Link to='#'><Image src={Telegram}/></Link>
                    <Link to='#'><Image src={Twitter}/></Link>
                    <Link to='#'><Image src={Instagram}/></Link>
                    <Link to='#'><Image src={Reddit}/></Link>
                    <Link to='#'><Image src={Medium}/></Link>
                </SocialWrapper>
            </Flex>
            <Flex direction={'column'}>
                <Title size={'30px'} mtop={'22px'}>Quick links</Title>
                <Text>All Tokens</Text>
                <Text>All Pre-Sales</Text>
            </Flex>
            <Flex direction={'column'}>
                <Title size={'30px'} mtop={'22px'}>Documents</Title>
                <Text>Whitepaper</Text>
                <Text>Tech paper</Text>
            </Flex>
            <Flex>
                <Flex direction={'column'}>
                    <Title size={'30px'} mtop={'22px'}>Contact</Title>
                    <Text>info@hunterdoge.com</Text>
                    <Button>Submit your Coin</Button>
                </Flex>
                <ImageWrapper>
                    <Image src={hunterdogeBook}/>
                </ImageWrapper>
            </Flex>
        </FooterMain>
    );
};

export default Footer;
