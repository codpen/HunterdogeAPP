import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import styled from "styled-components";

import NoPresaleView from "../components/chartsViews/noPresale/NoPresale";
import LiveChart from "../components/chartsViews/liveChart/LiveChart";
import Comments from "../components/comments/";
import TokenInformation from "../components/chartsViews/tokenInformation/TokenInformation";
import PreSale from "../components/chartsViews/upcomingPreSale/Presale";
import {useWeb3React} from "@web3-react/core";
import TokenHeader from "../components/tokenInformationHeader/TokenHeader";
import {Button, Flex} from "../components/common/index";
import PopularPreSales from "../components/popularPreSales";
import TabsStyled from '../components/Tabs/Tabs';

const tabs = [
  "chart & stats",
  "token information",
  `upcoming pre-sale`
]

// const ChangePart = ({setPartActive, partActive}) => (
//     <Part>
//         <span className={partActive === 1 ? 'active' : ''} onClick={() => setPartActive(1)}>chart & stats</span>
//         <Divider/>
//         <span className={partActive === 2 ? 'active' : ''} onClick={() => setPartActive(2)}>token information</span>
//         <Divider/>
//         <span className={partActive === 3 ? 'active' : ''} onClick={() => setPartActive(3)}>upcoming pre-sale</span>
//     </Part>
// )
// <Index />
const TokenPage = () => {
    let history = useHistory();
    const {account} = useWeb3React()
    const [partActive, setPartActive] = useState(1)

    const isPresale = account ? <PreSale/> : <NoPresaleView/>
    return (
        <Block>
            <Container>
                <Button onClick={() => history.goBack()} size={'20px'} height={'47px'} width={'104px'} margin={'0 0 27px 0'}>{'< BACK'}</Button>
                <TokenHeader/>
                <TabsStyled setPartActive={setPartActive} partActive={partActive} data={tabs}/>
                {partActive === 1 ? <LiveChart/> : partActive === 2 ? <TokenInformation/> : isPresale}
                {/* <Comments/> */}
                <PopularPreSales/>
            </Container>
        </Block>
    );
};

export default TokenPage;

const Container = styled.div`
  margin: 0 50px;
  max-width: 1420px;
`

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Edit = styled(Link)`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #B78300;
  transition: 0.4s;
  
  margin-right: 30px;
  &:hover {
    color: #d5b562;
  }
`

const Divider = styled.div`
  width: 2px;
  height: 22px;
  background: #B78300;
  font-weight: normal;
`

const Part = styled.div`
  margin: 10px auto;
  max-width: 730px;
  filter: drop-shadow(2.20706px 2.20706px 0px rgba(0, 0, 0, 0.1));
  height: 34.48px;
  background: #FFFBE2;
  border-radius: 11.0353px;
  display: flex;
  align-items: center;

  span {
    margin: auto 30px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 18.566px;
    line-height: 98.1%;
    text-transform: uppercase;
    color: #B78300;
    cursor: pointer;
    
    transition: 0.4s;

    &:hover {
      color: #d5b562;
    }
    //
    //&:active {
    //  font-weight: bold;
    //}

    &.active {
      font-weight: bold;
    }
  }
`