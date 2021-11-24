import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Box} from "@mui/system";
import {Typography, Grid, InputBase} from "@material-ui/core";
import styled from 'styled-components';

const useStyles = makeStyles({
    inputRow: {
        display: 'fles',
        alignItems: 'center',
        margin: '0px',
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '24px auto'
    },
    descriptionLabel: {
        marginTop: '10px'
    },
    tokenomic: {
        marginBottom: '120px'
    }
});

const InfoLinks = [
    { name: 'maxSupply', label: 'Max supply' },
    { name: 'burnSupply', label: 'Burn supply' },
    { name: 'presaleSupply', label: 'Pre-sale supply' },
    { name: 'teamTokens', label: 'Team tokens (%)' },
    { name: 'liquidityLockDate', label: 'Liquidity lock date' },
    { name: 'launchDate', label: 'Launch date' },
    { name: 'buyTaxes', label: 'Buy taxes (%)' },
    { name: 'sellTaxes', label: 'Sell taxes (%)' },
    { name: 'holderRewards', label: 'Holder rewards (%)' },
    { name: 'rewardsCurrency', label: 'Rewards currency' },
    { name: 'liquidityFees', label: 'Liquidity fees (%)' },
    { name: 'marketingFees', label: 'Marketing fees (%)' }
]

const TokenEditModalTokenomicsPage = ({value, changeValue}) => {
    const classes = useStyles();
    const [data, setData] = useState({})
    const onChangeValue = (name, value) => {
        const data_temp = {...data}
        data_temp[name] = value
        setData(data_temp)
        changeValue(name, value)
    }

    useEffect(() => {
        if (value) setData(value)
        else setData({})
    }, [value])

    return (
        <div className={classes.tokenomic}>
            <Box component='h4' sx={{fontSize: '32px', fontWeight: '700',mb: '26px', textAlign: 'center', lineHeight: '32.4px', color: '#B78300'}}>
                2. Tokenomics
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    {InfoLinks.slice(0, 6).map((link, idx) => (
                        <Grid container className={classes.inputRow} key={idx}>
                            <Grid item xs={5}>
                                <label>{link.label}</label>
                            </Grid>
                            <Grid item xs={7}>
                                <InputBase                               
                                    fullWidth
                                    sx={{ padding: '0px 8px' }}
                                    value={data[link.name]}
                                    onChange={(e) => { onChangeValue(link.name, e.target.value) }}
                                />
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={12} md={6}>
                    {InfoLinks.slice(6, 12).map((link, idx) => (
                        <Grid container className={classes.inputRow} key={idx}>
                            <Grid item xs={5} className={classes.descriptionLabel}>
                                <label>{link.label}</label>
                            </Grid>
                            <Grid item xs={7}>
                                <InputBase                               
                                    fullWidth
                                    sx={{ padding: '0px 8px' }}
                                    value={data[link.name]}
                                    onChange={(e) => { onChangeValue(link.name, e.target.value) }}
                                />
                            </Grid>
                        </Grid>                        
                    ))}               
                </Grid>
            </Grid>
        </div>
    )
}

export default TokenEditModalTokenomicsPage;
