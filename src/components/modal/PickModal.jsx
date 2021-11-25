import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/styles";
import {Box} from "@mui/system";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import logo from '../../images/hunter_logo.png';
import {useWeb3React} from "@web3-react/core";
import styled from 'styled-components'
import { Image } from '../common';

const useStyles = makeStyles({

    root: {
        width: '100vw',
        height: '100vh',
        margin: '0 auto'
    },

    modal: {
        zIndex: 100,
        position: "absolute",
        bottom: '-50%',
        left: '310%',
        // right: 0,
        margin: '0 auto',
        padding: '46px 50px 30px',
        width: '701px',
        height: '394px',
        background: '#FFF599',
        border: '3px solid #FAF0CB',
        boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
        borderRadius: '25px',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "&:before": {
          content: '""',
          position: "absolute",
          bottom: '20px',
          left: '-40px',
          border: '15px solid transparent',
          borderRight: '35px solid #FFF599',
        }
    },
    btn: {
        fontSize: '10px',
        padding: '6.5px 12px'
    },
    btnClose: {
        position: 'absolute',
        top: '35px',
        right: '35px',
        fontWeight: 'bold',
        fontSize: '26px',
        lineHeight: '26px',
        border: 'transparent',
        backgroundColor: 'transparent',
        color: '#B78300',
        cursor: 'pointer',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
});

const PickModal = ({ setIsOpen }) => {
    const classes = useStyles();
    return (
        <Popup className={classes.modal} onClick={(e) => e.stopPropagation()}>
            <button className={classes.btnClose} onClick={() => setIsOpen(false)}>X</button>
            <div className={classes.wrapper}>
                <Typography sx={{fontSize: '26px', textAlign: 'center', lineHeight: '26px', mb: '28px', textTransform: 'uppercase'}}>
                  pick your picture
                </Typography>
            </div>
            <WrapperPicture>
              <Image src={logo} width={'103'} height={'94'}/>
              <Image src={logo} width={'103'} height={'94'}/>
              <Image src={logo} width={'103'} height={'94'}/>
              <Image src={logo} width={'103'} height={'94'}/>
              <Image src={logo} width={'103'} height={'94'}/>
              <Image src={logo} width={'103'} height={'94'}/>
              <Image src={logo} width={'103'} height={'94'}/>
              <Image src={logo} width={'103'} height={'94'}/>
              <Image src={logo} width={'103'} height={'94'}/>
              <Image src={logo} width={'103'} height={'94'}/>
            </WrapperPicture>
            <Box component='div' sx={{ mt: '38px', width: 257, mx: 'auto'}}>
              <Button
              // onClick={() => sendMail()}
              fullWidth sx={{fontSize: 15, py: 1, height: '30px', width: '161px'}}>choose</Button>
            </Box>
        </Popup>
    );
};

export default PickModal;


const InputMessage = styled.textarea`
  width: 604px;
  height: 311px;
  padding: 15px;
  background: #FFF599;
  border: 2.72138px solid #9F7E04;
  box-sizing: border-box;
  border-radius: 27.2138px;
  font-size: 16px;
`
const InputEmail = styled.input`
  width: 446px;
  height: 47px;
  background: #FFF599;
  border: 2.72138px solid #9F7E04;
  box-sizing: border-box;
  border-radius: 27.2138px;
  font-size: 16px;
  padding: 5px;
`

const WrapperPicture = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 598px;
  height: 206px;
  gap: 20px;
`
const Popup = styled.div`
    /* &::before {
      content: ''; 
      position: absolute;
      top: 0;
      left: -40px;
      border: 15px solid transparent;
      border-left: 35px solid #FFF599;
    } */
`