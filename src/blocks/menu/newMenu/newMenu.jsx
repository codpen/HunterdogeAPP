import React, {useState} from 'react';
import {LinkWrapper} from "../../../components/common";
import hunterdogeShadow from '../../../images/hunterdoge_menu.png';
import ContactModal from "../../../components/modal/Contact";
import SearchInput from "../../../components/searchInput";
import {Flex, ImageWrapper, Wrapp, WrappedButton, WrappedLink, Wrapper} from "./MenuStyled";

const NewMenu = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Wrapper>
                <Wrapp>
                    <SearchInput small mb={'28px'}/>
                </Wrapp>
                <LinkWrapper to="/allTokens">
                    <WrappedButton>all tokens</WrappedButton>
                </LinkWrapper>
                <LinkWrapper to="/nft-gallery">
                    <WrappedButton to="/nft-gallery">NFT GALLERY</WrappedButton>
                </LinkWrapper>
                <a href="https://t.me/huntersground" target="_blank" style={{width: '100%'}}>
                    <WrappedButton>telegram shill bot</WrappedButton>
                </a>
                <WrappedButton onClick={() => setOpen(true)}>contact</WrappedButton>
                <Flex>
                    <WrappedLink to={'https://t.me/hunterdogeofficial'}>+ Submit your coin</WrappedLink>
                    <ImageWrapper src={hunterdogeShadow}/>
                </Flex>
                {open && <ContactModal setIsOpen={setOpen}/>}
            </Wrapper>
        </>

    );
};

export default NewMenu;


