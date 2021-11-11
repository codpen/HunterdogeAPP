import React from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/styles";
import {Box} from "@mui/system";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {buyVotes} from "../../connection/functions";
import {useWeb3React} from "@web3-react/core";

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
        padding: '26px',
        width: '525px',
        height: '441px',
        background: '#FFDA01',
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
const data = [
    {id: '222', value: '1 vote', votes: 1},
    {id: '223', value: '5 votes', votes: 5},
    {id: '224', value: '10 votes', votes: 10},
    {id: '225', value: '25 votes', votes: 25},
    {id: '226', value: '50 votes', votes: 50},
    {id: '227', value: '100 votes', votes: 100},
    {id: '228', value: '250 votes', votes: 250},
    {id: '229', value: '500 votes', votes: 500},
]

const Modal = ({ setIsOpen }) => {
    const {account} = useWeb3React()
    const classes = useStyles();

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
                <Box component='h4' sx={{fontSize: '60px', mb: '10px', textAlign: 'center', lineHeight: '58px'}}>
                    Buy votes
                </Box>
                <Typography sx={{fontSize: '18px', textAlign: 'center', lineHeight: '18px', mb: '17px'}}>
                    How many votes do you want do buy?
                </Typography>
            </div>
            <Box component='div'>
                {data.map((item) =>
                    <Box key={item.id} component='div' className={classes.flexLine} sx={{mt: '12px'}}>
                        <Typography className={classes.value}>
                            {item.value}
                        </Typography>
                        <Button className={classes.btn} size="small" onClick={() => buy(item.votes)}>Buy now</Button>
                    </Box>
                )}
            </Box>
        </Card>
    );
};

export default Modal;
