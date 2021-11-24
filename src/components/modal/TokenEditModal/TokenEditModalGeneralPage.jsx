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
    }
});

const InfoLinks = [
    { name: 'name', label: 'Project name' },
    { name: 'ticker', label: 'Token ticker' },
    { name: 'address', label: 'Contract address' },
    { name: 'website', label: 'Website' },
    { name: 'telegram', label: 'Telegram link' },
    { name: 'twitter', label: 'Twitter link' },
    { name: 'discord', label: 'Discord link' },
    { name: 'instagram', label: 'Instagram link' },
    { name: 'reddit', label: 'Reddit link' },
    { name: 'medium', label: 'Medium link' },
    { name: 'logo', label: 'Logo link' },
    { name: 'description', label: 'Project description' },
    { name: 'pancakeswap ', label: 'PancakeSwap link' },
    { name: 'cmc', label: 'CMC link' },
    { name: 'cg', label: 'CG link' },
]

const TokenEditModalGeneralPage = ({value, changeValue}) => {
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
        <div>
            <Box component='h4' sx={{fontSize: '32px', fontWeight: '700',mb: '26px', textAlign: 'center', lineHeight: '32.4px', color: '#B78300'}}>
                1. General information
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    {InfoLinks.slice(0, 10).map((link, idx) => (
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
                                >
                                </InputBase>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={12} md={6}>
                    {InfoLinks.slice(10, 15).map((link, idx) => (
                        link.name != 'description' ?
                        (
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
                                    >
                                    </InputBase>
                                </Grid>
                            </Grid>
                        ):
                        (
                            <Grid container className={classes.inputRow} key={idx}>
                                <Grid item xs={12} className={classes.descriptionLabel}>
                                    <label>Project description</label>
                                </Grid>
                                <Grid item xs={12}>
                                    <InputMessage
                                        id="Message"
                                        value={data[link.name]}
                                        onChange={(e) => { onChangeValue(link.name, e.target.value) }}
                                    />
                                </Grid>
                            </Grid>
                        )
                    ))}               
                </Grid>
            </Grid>
        </div>
    )
}

export default TokenEditModalGeneralPage;

const InputMessage = styled.textarea`
  width: 100%;
  height: 294px;
  padding: 15px;
  margin-top: 4px;
  border: 2.72138px solid #9F7E04;
  box-sizing: border-box;
  border-radius: 16px;
  filter: drop-shadow(0px 5px 0px rgba(0, 0, 0, 0.1));
  color: #B78300;
  font-size: 20px;
  font-weight: bold;
`