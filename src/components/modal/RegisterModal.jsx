import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import { Button, ButtonGroup,Stack} from '@mui/material';
import {makeStyles} from "@material-ui/styles";
import {Box} from "@mui/system";
import {Typography} from "@material-ui/core";
import {isMember, register, membership, membershipCosts} from "../../connection/functions";
import {useWeb3React} from "@web3-react/core";
import { useWallet } from "@binance-chain/bsc-use-wallet";

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
        left: 0,
        right: 0,
        margin: '0 auto',
        padding: '60px',
        width: '926px',
        height: '454px',
        background: '#FFF',
        border: '6px solid  #AB882E',
        boxSizing: 'border-box',
        borderRadius: '60px',
    },
    flexLine: {

        height: '23px',
        display: 'flex',
        marginRight: '150px',
        justifyContent: 'right'
    },
    value: {
        width: '94px',
        marginRight: '15px',
        fontWeight: 'bold',
        fontSize: '18px',
        textTransform: 'uppercase',
        textAlign: 'center'
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
});

const RegisterModal = ({ setIsOpen }) => {
    const [cost, setCost] = useState('0')
    // const {account, chainId} = useWeb3React()
    const { account, chainId } = useWallet();
    const classes = useStyles();

    const approve = async () => {
        if (account) {
            await register(account)
        } else {
            alert('You need to connect wallet')
        }
    }

    const buy = async () => {
        if (account) {
            await membership(account)
        } else {
            alert('You need to connect wallet')
        }
    }

    useEffect(() => {
        const call = async () => {
            const res = await membershipCosts()
            console.log(res)
            setCost(res)
        }
        {chainId === 56 && call()}
    },[account])

    return (
        <Card className={classes.modal}>
            <button className={classes.btnClose} onClick={() => setIsOpen(false)}>X</button>
            <div>
                <Box component='h4' sx={{fontSize: '60px', mb: '26px', textAlign: 'center', lineHeight: '58px', color: '#000000'}}>
                  register
                </Box>
                <Typography sx={{fontSize: '25px', textAlign: 'center', lineHeight: '25px', mb: '35px', textTransform: 'uppercase', color: '#000000'}}>
                  get a membership to support your favorite projects
                </Typography>
                <Typography sx={{fontSize: '25px', textAlign: 'center', lineHeight: '25px', mb: '17px', textTransform: 'uppercase', color: 'rgba(183, 131, 0, 0.6)'}}>
                  membership costs
                </Typography>
                <Typography sx={{fontSize: '30px', textAlign: 'center', lineHeight: '30px', textTransform: 'uppercase', color: '#000000'}}>
                    {cost} $HD
                </Typography>
            </div>
            <ButtonGroup disableElevation variant="center" sx={{ mt: '20px',textAlign: 'center', ml: '200px' }}>
                <Button onClick={approve}
                               fullWidth sx={{fontSize: 24, py: 1, width: '200px', height: '47px'}}>Approve
                </Button>
                <Button onClick={buy}
                        fullWidth sx={{fontSize: 24, py: 1,width: '200px', height: '47px'}}>Buy
                </Button>
            </ButtonGroup >
        </Card>
    );
};

export default RegisterModal;
