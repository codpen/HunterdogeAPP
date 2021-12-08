import React from 'react';
import {LinkWrapper} from "../../../components/common";
import hunterdogeShadow from '../../../images/hunterdoge_menu.png';
import SearchInput from "../../../components/searchInput";
import {CloseButton, Flex, ImageWrapper, SmallWrappedButton, Title, Wrapp, WrappedButton, Wrapper} from "./MenuStyled";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const NewMenu = (props) => {
    const mobileMatches = useMediaQuery('(min-width:600px)');
    const onClickRegister = () => {
        props.setOpen(false)
        props.openRegister()
    }
    const onClickContact = () => {
        if (props.setOpen) {
            props.setOpen(false)
        }
        props.setIsContact(true)
    }
    return (
        <>
            <Wrapper>
                {!mobileMatches && <Title>HUNTERDOGE</Title>}
                <Wrapp>
                    {!mobileMatches && <CloseButton onClick={() => props.setOpen(false)}>X</CloseButton>}
                    <SearchInput small mb={mobileMatches ? '28px' : '0px'}/>
                </Wrapp>
                {!mobileMatches &&
                    <WrappedButton onClick={onClickRegister} sx={{mt: 1.5}}>
                        register
                    </WrappedButton>
                }
                <LinkWrapper onClick={() => {
                    props.setOpen && props.setOpen(false)
                }} to="/allTokens">
                    <WrappedButton>all tokens</WrappedButton>
                </LinkWrapper>
                <a onClick={() => {
                    props.setOpen && props.setOpen(false)
                }} href="https://t.me/huntersground" target="_blank" style={{width: '100%'}}>
                    <WrappedButton>telegram shill bot</WrappedButton>
                </a>
                <WrappedButton onClick={onClickContact}>contact</WrappedButton>
                <Flex>
                    <a onClick={() => {
                        props.setOpen && props.setOpen(false)
                    }} href="https://t.me/hunterdogeofficial" target="_blank" style={{width: '100%'}}>
                        <SmallWrappedButton > Apply for Listing
                        </SmallWrappedButton>
                    </a>
                    <ImageWrapper src={hunterdogeShadow}/>
                </Flex>
            </Wrapper>

        </>

    );
};

export default NewMenu;


