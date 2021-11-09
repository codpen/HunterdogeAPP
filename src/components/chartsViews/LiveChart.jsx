import React from 'react';
import styled from 'styled-components';
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
            <Grid item xs={8}>
                <Grid container>
                    <Typography sx={{fontSize: '21px', fontWeight: '800', lineHeight: '21px', mr: '22px'}}>
                        LIVE CHART
                    </Typography>
                    <Typography sx={{fontSize: '21px', fontWeight: '300', fontStyle: 'italic', lineHeight: '21px'}}>
                        PAIR HUNT - BNB
                    </Typography>
                    <Box style={{ width: '600px' }} component='img' src={Chart} sx={{mt: '22px'}}/>
                </Grid>
                {/* <Box component='img' src={Chart} sx={{mt: '22px'}}/> */}
            </Grid >
            <Grid item xs={4}>
                <h2 style={{ marginBottom: '30px' }}>STATS</h2>
                <Title>MAX SUPPLY</Title>
                <Value>500’000’000’000’000’000</Value>
                <Title>market cap</Title>
                <Value>$105’505’044</Value>
                <Title>current price in usd</Title>
                <Value>$0.0000000832</Value>
                <Title>Pc v2  I HUNT/BNB LP HOLDINGS</Title>
                <Value>3,863.91 BNB <Price>($1’313’078)</Price></Value>
            </Grid>
        </Grid>

    );
};

export default LiveChart;

const Title = styled.p`
    margin-bottom: 10px;
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 15.57px;
    line-height: 98.1%;
    /* or 15px */

    text-transform: uppercase;

    /* titel */

    color: #B78300;
`

const Value = styled.p`
    margin-bottom: 26px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 800;
    font-size: 19px;
    line-height: 98.1%;
    /* identical to box height, or 19px */

    text-transform: uppercase;

    /* titel */

    color: #B78300;
`

const Price = styled.span`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 15.57px;
    line-height: 98.1%;
    color: #32C130;
`
