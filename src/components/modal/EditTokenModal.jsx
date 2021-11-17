import React, { useRef } from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/styles";
import {Box} from "@mui/system";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {buyVotes} from "../../connection/functions";
import {useWeb3React} from "@web3-react/core";
import { Grid, InputBase } from '@mui/material';

const useStyles = makeStyles({

    root: {
        width: '100vw',
        height: '100vh',
        margin: '0 auto'
    },

    modal: {
        zIndex: 100,
        position: "fixed",
        top: '205px',
        left: 0,
        right: 0,
        margin: '0 auto',
        padding: '26px 100px',
        width: '800px',
        height: '580px',
        background: '#FFF',
        border: '6px solid  #AB882E',
        boxSizing: 'border-box',
        borderRadius: '60px',
    },
    input: {
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    btn: {
        fontSize: '20px',
        padding: '10px 50px',
    },
    btnClose: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '32px',
        height: '32px',
        border: '3px solid #B78300',
        fontWeight: 'bold',
        fontSize: '18px',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        color: '#B78300',
        cursor: 'pointer',
    },
});

const EditTokenModal = ({ setIsOpen }) => {
    const {account} = useWeb3React()
    const classes = useStyles();

    const projectName = useRef('')
    const tokenTicker = useRef('')
    const contractAddress = useRef('')
    const website = useRef('')
    const telegramLink = useRef('')
    const twitterLink = useRef('')

    const buy = (votes) => {
        if (account) {
            buyVotes(account, votes)
        } else {
            alert('You need to connect wallet')
        }
    }

    return (
        <Card className={classes.modal}>
            <button className={classes.btnClose} onClick={() => setIsOpen(false)}>X</button>
            <div>
                <Box component='h4' sx={{fontSize: '40px', mb: '10px', textAlign: 'center', lineHeight: '58px'}}>
                    EDIT your token information
                </Box>
                <Typography sx={{fontSize: '24px', textAlign: 'center', lineHeight: '18px', mb: '17px'}}>
                    connect the manager wallet to edit.
                </Typography>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <Typography className={classes.desc}>
                        Project name
                    </Typography>
                </Grid>
                <Grid item xs={6} md={8}>
                    <InputBase ref={projectName} className={classes.input} />
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography className={classes.desc}>
                        Token Tiker
                    </Typography>
                </Grid>
                <Grid item xs={6} md={8}>
                    <InputBase ref={tokenTicker} className={classes.input} />
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography className={classes.desc}>
                        Contract Address
                    </Typography>
                </Grid>
                <Grid item xs={6} md={8}>
                    <InputBase ref={contractAddress} className={classes.input} />
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography className={classes.desc}>
                        Website
                    </Typography>
                </Grid>
                <Grid item xs={6} md={8}>
                    <InputBase ref={website} className={classes.input} />
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography className={classes.desc}>
                        Telegram Link
                    </Typography>
                </Grid>
                <Grid item xs={6} md={8}>
                    <InputBase ref={telegramLink} className={classes.input} />
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography className={classes.desc}>
                        Twitter Link
                    </Typography>
                </Grid>
                <Grid item xs={6} md={8}>
                    <InputBase ref={twitterLink} className={classes.input} />
                </Grid>
            </Grid>
            <Box component='div' sx={{textAlign: 'center', padding: '40px'}}>
                <Button className={classes.btn} variant="contained">Send</Button>
            </Box>
        </Card>
    );
};

export default EditTokenModal;
