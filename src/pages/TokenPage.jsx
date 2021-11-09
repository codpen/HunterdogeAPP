import React, {useState} from 'react';
import styled from "styled-components";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import NoPresaleView from "../components/chartsViews/NoPresale";
import LiveChart from "../components/chartsViews/liveChart/LiveChart";
import Comments from "../components/comments/";
import TokenInformation from "../components/chartsViews/tokenInformation/TokenInformation";
import PreSale from "../components/chartsViews/upcomingPreSale/Presale";
import {useWeb3React} from "@web3-react/core";
import TokenHeader from "../components/tokenInformationHeader/TokenHeader";
import {Button} from "../components/common/index";

const useStyles = makeStyles({
    root: {
        margin: '0 50px',
        maxWidth: '1420px',
    },
    card: {}
});

const ChangePart = ({setPartActive}) => (
    <Part>
        <span className='active' onClick={() => setPartActive(1)}>chart & stats</span>
        <Divider/>
        <span onClick={() => setPartActive(2)}>token information</span>
        <Divider/>
        <span onClick={() => setPartActive(3)}>upcoming pre-sale</span>
    </Part>
)
// <Index />
const NftGallery = () => {
    const {account} = useWeb3React()
    const [partActive, setPartActive] = useState(1)
    const classes = useStyles();

    const isPresale = account ? <PreSale/> : <NoPresaleView/>
    return (
        <Block>
            <Grid className={classes.root}>
                <Button size={'20px'} height={'47px'} width={'104px'} margin={'0 0 27px 0'}>{'< BACK'}</Button>
                <TokenHeader/>
                <ChangePart setPartActive={setPartActive}/>
                {partActive === 1 ? <LiveChart/> : partActive === 2 ? <TokenInformation/> : isPresale}
                <Comments/>
            </Grid>
        </Block>
    );
};

export default NftGallery;

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

    &:hover {
      font-weight: bold;
      
    }

    &:active {
      font-weight: bold;
    }

    &.active {
      font-weight: bold;
    }
  }
`