import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {makeStyles} from "@material-ui/styles";
import NoPresale from "../../images/noPresale.png";
import {Box} from "@mui/system";
import {Link} from '@material-ui/core';
import ConnectMetaMask from "../../connection/ConnectMetaMask";
import Chart from "../../images/Chart.png";

const useStyles = makeStyles({
    root: {},
    content: {
        maxWidth: '1420px',
        background: '#FFFFFF',
        boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
        borderRadius: '25px',
        padding: '35px'
    },
    img: {
        marginTop: '40px'
    },
    btn: {
        width: '123px',
    },
    breadCrumb: {
        color: '#B78300'
    }
});

const LiveChart = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.content} xs={12}>
            <Grid item xs={7}>
                <Grid container>
                    <Typography sx={{fontSize: '21px', fontWeight: '800', lineHeight: '21px', mr: '22px'}}>
                        LIVE CHART
                    </Typography>
                    <Typography sx={{fontSize: '21px', fontWeight: '300', fontStyle: 'italic', lineHeight: '21px'}}>
                        PAIR HUNT - BNB
                    </Typography>
                </Grid>
                <Box component='img' src={Chart} sx={{mt: '22px'}}/>
            </Grid >
            <Grid item xs={5}>
1
            </Grid>
        </Grid>

    );
};

export default LiveChart;
