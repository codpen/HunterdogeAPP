import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/styles";
import nft from '../../images/nft_image.png';
import {Box} from "@mui/system";

const useStyles = makeStyles({
    root: {
        minWidth: 317,
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    flexLine: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    des: {
        fontSize: '16px',
        color: '#D6B050',
        lineHeight: '15.7px',
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    value: {
        fontSize: '16px',
        fontWeight: '700',
        color: '#AB882E',
        textTransform: 'uppercase'
    },
    content: {
        padding: '5px 10px 0 10px',
    },
    headerContent: {
        width: '317px',
        height: '309px',
        background: 'linear-gradient(180deg, #D9B354 0%, rgba(14, 13, 10, 0.1) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const data = [
    {id: '123', des: 'TOTAL Quantity', value: '355'},
    {id: '124', des: 'issued quantity', value: '230'},
    {id: '125', des: 'availability', value: 'very rare'},
    {id: '126', des: 'cost per NFT', value: '0.01 BNB'},
]

const CardNft = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.headerContent}>
                <Box component='img' src={nft}
                     sx={{width: "285.83px", height: "276px"}}/>
            </div>
            <Box component='h5' sx={{fontSize: '25px', mt: '17px', textAlign: 'center'}}>
                Hunter chasing hotdogs
            </Box>
            <CardContent className={classes.content}>
                {data.map((item) =>
                    <Box key={item.id} component='div' className={classes.flexLine} sx={{mt: '12px'}}>
                        <Typography variant="body2" component="p" className={classes.des}>
                            {item.des}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.value}>
                            {item.value}
                        </Typography>
                    </Box>
                )}
                <Box component='div' className={classes.flexLine} sx={{mt: '18px'}}>
                    <Button size="small">buy this nft</Button>
                    <Button size="small">Sell your nft</Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CardNft;