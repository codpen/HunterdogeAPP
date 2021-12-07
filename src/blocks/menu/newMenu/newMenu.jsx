import React, { useState } from 'react';
import { LinkWrapper } from "../../../components/common";
import hunterdogeShadow from '../../../images/hunterdoge_menu.png';
import ContactModal from "../../../components/modal/Contact";
import SearchInput from "../../../components/searchInput";
import { Flex, ImageWrapper, Wrapp, WrappedButton, WrappedLink, Wrapper, CloseButton, Title } from "./MenuStyled";
import ConnectWallet from '../../../connection/ConnectWallet';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button } from "@mui/material";
const NewMenu = (props) => {
    const [open, setOpen] = useState(false)
    const mobileMatches = useMediaQuery('(min-width:600px)');
    const onClickRegister = () => {
        props.setOpen(false)
        props.openRegister()
    }
    return (
        <>
            <Wrapper>
                {!mobileMatches && <Title>HUNTERDOGE</Title>}
                <Wrapp>
                    {!mobileMatches && <CloseButton onClick={() => props.setOpen(false)}>X</CloseButton>}
                    <SearchInput small mb={mobileMatches ? '28px' : '0px'} />
                </Wrapp>
                {!mobileMatches &&
                    <WrappedButton onClick={onClickRegister} sx={{ mt: 1.5 }}>
                        register
                    </WrappedButton>
                }
                <LinkWrapper onClick={() => { props.setOpen && props.setOpen(false) }} to="/allTokens">
                    <WrappedButton>all tokens</WrappedButton>
                </LinkWrapper>
                {/* <LinkWrapper to="/nft-gallery">
                    <WrappedButton to="/nft-gallery">NFT GALLERY</WrappedButton>
                </LinkWrapper> */}
                <a onClick={() => { props.setOpen && props.setOpen(false) }} href="https://t.me/huntersground" target="_blank" style={{ width: '100%' }}>
                    <WrappedButton>telegram shill bot</WrappedButton>
                </a>
                <WrappedButton onClick={() => { props.setOpen && props.setOpen(false); setOpen(true) }}>contact</WrappedButton>
                <Flex>
                    <WrappedLink to={'https://t.me/hunterdogeofficial'}>+ Submit your coin</WrappedLink>
                    <ImageWrapper src={hunterdogeShadow} />
                </Flex>
                {open && <ContactModal setIsOpen={setOpen} />}
            </Wrapper>

        </>

    );
};

export default NewMenu;


