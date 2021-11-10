import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Footer from './blocks/footer';
import Header from './blocks/header/index.jsx';
import Hero from './blocks/hero';
import AllTokens from './pages/AllTokens';
import HomePage from './pages/HomePage';
import NftGallery from './pages/NftGallary.jsx';
import TokenPage from "./pages/TokenPage";

import Modal from "./components/modal/Modal";

import Menu from './blocks/menu';
import Paws from './images/paws_bg.svg';
import Loupe from './images/loupe_bg.svg';
import Bow from './images/bow_bg.svg';

const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Router>
            <Main>
                <Header/>
                <Hero setIsOpen={setIsOpen}/>
                { isOpen && <Modal setIsOpen={setIsOpen}/> }
                <Pages>
                    <Menu/>
                    <Switch>
                        <Route path="/" exact>
                            <HomePage/>
                        </Route>
                        <Route path="/allTokens" exact>
                            <AllTokens/>
                        </Route>
                        <Route path="/nft-gallery" exact>
                            <NftGallery/>
                        </Route>
                        <Route path="/token" exact>
                            <TokenPage/>
                        </Route>
                    </Switch>
                </Pages>
                <Footer/>
            </Main>
        </Router>
    )
}

export default App;

const Main = styled.div`
    margin: auto;
    max-width: 1920px;
`

const Pages = styled.div`
    display: flex;
    margin-top: 34px;
    padding-left: 44px;
    background-image: url(${Paws}), url(${Loupe}), url(${Bow});
    background-repeat: no-repeat;
    // backgroundSize:'100% 100%', 
    background-position: top 130px left 330px, top 130px right 340px, top 950px left 315px;       
      
`