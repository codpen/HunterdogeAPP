import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Footer from './blocks/footer';
import Header from './blocks/header/index.jsx';
import Hero from './blocks/hero';
import AllTokens from './pages/AllTokens';
import HomePage from './pages/HomePage';
import NftGallery from './pages/NftGallary.jsx';
import TokenPage from "./pages/TokenPage";
import TokenEditPage from "./pages/TokenEditPage";
import Modal from "./components/modal/Modal";
import Menu from './blocks/menu';
import Paws from './images/paws_bg.svg';
import Loupe from './images/loupe_bg.svg';
import Bow from './images/bow_bg.svg';
import { useWeb3React } from "@web3-react/core";
import { useWallet } from "@binance-chain/bsc-use-wallet";
import { isMember } from './connection/functions';
import NewMenu from "./blocks/menu/newMenu/newMenu";
import MobileMenu from './blocks/menu/mobileMenu/MobileMenu';
import ModalContextProvider from './contexts/ModalProvider';
import { getPrice24H } from "./utils/getPrice24H";
import GoogleSheetContextProvider from './contexts/GoogleSheetProvider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ScrollToTop from 'react-scroll-up';

const App = () => {
    // const { account } = useWeb3React()
    const { account, chainId } = useWallet();
    const [isOpen, setIsOpen] = useState(false)
    const [register, setRegister] = useState(false)
    const mobileMatches = useMediaQuery('(min-width:600px)');

    useEffect(() => {
        const getIsMember = async () => {
            const member = await isMember(account)
            console.log('member', member)
            setRegister(member)
        }
        account && getIsMember()
    }, [account])
    return (
        <Router basename='/'>
            <ModalContextProvider>
                <GoogleSheetContextProvider>
                    <Main>
                        {!mobileMatches && <MobileMenu />}
                        {mobileMatches && <Header />}
                        {mobileMatches && <Hero setIsOpen={setIsOpen} register={register} />}
                        {isOpen && <Modal setIsOpen={setIsOpen} />}
                        <Pages>
                            {/* <Menu/> */}
                            {mobileMatches && <NewMenu />}
                            <Switch>
                                <Route path="/" exact>
                                    <HomePage />
                                </Route>
                                <Route path="/allTokens" exact>
                                    <AllTokens />
                                </Route>
                                {/* <Route path="/nft-gallery" exact>
                                    <NftGallery />
                                </Route> */}
                                <Route path="/token/:address" exact>
                                    <TokenPage />
                                </Route>
                                <Route path="/token-edit/:address" exact>
                                    <TokenEditPage />
                                </Route>
                            </Switch>
                        </Pages>
                        <Footer />
                    </Main>
                </GoogleSheetContextProvider>
            </ModalContextProvider>
        </Router>
    )
}

export default App;

const Main = styled.div`
    position: relative;
    margin: auto;
    max-width: 1920px;
    overflow: hidden;
`

const Pages = styled.div`
    display: flex;
    margin-top: 34px;
    padding-left: 0;
    background-image: url(${Paws}), url(${Loupe}), url(${Bow});
    background-repeat: no-repeat;
    // backgroundSize:'100% 100%', 
    background-position: top 130px left 330px, top 130px right 340px, top 950px left 315px;  
    @media screen and (min-width: 600px) {
        padding-left: 44px;
    }     
`

const Wrapper = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 98.1%;
  text-transform: uppercase;
  color: #B78300;
  margin-left: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: end;
    &:hover {
        color: #d5b562
    }
    &:hover > div {
        color: #d5b562
    }
`

const DoubleArr = styled.div`
    padding: 5px 5px 8px 5px;
    background: #fff8cc;
    border-radius: 50%;
    border: solid;
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;
    margin-left: 11px;
    text-align: center;
    color: #B78300;
    cursor: pointer;
    transform: rotate(270deg);
`