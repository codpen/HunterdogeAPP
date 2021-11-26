import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/styles";
import {Box} from "@mui/system";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {isMember, register, membership, membershipCosts} from "../../connection/functions";
import {useWeb3React} from "@web3-react/core";
import styled from 'styled-components'

const useStyles = makeStyles({

    root: {
        width: '100vw',
        height: '100vh',
        margin: '0 auto'
    },

    modal: {
        zIndex: 100,
        position: "absolute",
        top: '10%',
        left: '50%',
        right: 0,
        margin: '0 auto',
        padding: '66px 160px 52px',
        width: '926px',
        height: '639px',
        background: '#FFF',
        border: '6px solid  #AB882E',
        boxSizing: 'border-box',
        borderRadius: '60px',
        transform: 'translateX(-50%)'
    },
    btn: {
        fontSize: '10px',
        padding: '6.5px 12px'
    },
    btnClose: {
        position: 'absolute',
        top: '35px',
        right: '35px',
        width: '68px',
        height: '51px',
        fontWeight: 'bold',
        fontSize: '40px',
        lineHeight: '40px',
        borderRadius: '50%',
        border: 'transparent',
        backgroundColor: '#000',
        color: '#FFF',
        cursor: 'pointer',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
});

const ReportTokenModal = ({ setIsOpen }) => {
    const classes = useStyles();

    function sendMail() {
      var link = "mailto:info@hunterdoge.com"
    + "?cc="
    + "&subject=" + escape("Information")
    + "&body=" + escape(`${document.getElementById('Message').value}`)
    
    window.location.href = link;
    }

    return (
        <Card className={classes.modal}>
            <button className={classes.btnClose} onClick={() => setIsOpen(false)}>X</button>
            <div className={classes.wrapper}>
                <Box component='h4' sx={{fontSize: '60px', mb: '26px', textAlign: 'center', lineHeight: '58px', color: '#000000'}}>
                  report this token
                </Box>
                <Typography sx={{fontSize: '25px', textAlign: 'center', lineHeight: '25px', mb: '24px', textTransform: 'uppercase', color: '#000000'}}>
                    Please leave your message below.
                </Typography>
                <label>
                    <InputMessage
                    id="Message"
                    />
                </label>
            </div>
            <Box component='div' sx={{ mt: '38px', width: 257, mx: 'auto'}}>
              <Button
              onClick={() => sendMail()}
              fullWidth sx={{fontSize: 24, py: 1, height: '47px'}}>send now</Button>
            </Box>
        </Card>
    );
};

export default ReportTokenModal;


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
