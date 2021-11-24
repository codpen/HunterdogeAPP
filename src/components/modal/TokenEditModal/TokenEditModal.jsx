import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/styles";
import {Box} from "@mui/system";
import Button from "@material-ui/core/Button";
import styled from 'styled-components';

import TokenEditModalGeneralPage from './TokenEditModalGeneralPage';
import TokenEditModalTokenomicsPage from './TokenEditModalTokenomicsPage'
import TokenEditModalPresalePage from './TokenEditModalPresalePage';
import Pagination from '../../pagination/Pagination';
import {useGoogleSheet} from '../../../hooks/useGoogleSheet';
import {SHEET_ID} from "../../../constants";

const useStyles = makeStyles({
    modal: {
        zIndex: 100,
        position: "absolute",
        top: '5%',
        left: 0,
        right: 0,
        margin: '0 auto',
        padding: '80px 40px 60px 40px',
        width: '1060px',
        background: '#FFF',
        border: '6px solid  #AB882E',
        boxSizing: 'border-box',
        borderRadius: '60px',
        color: '#B78300'
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
        top: '30px',
        right: '35px',
        width: '68px',
        height: '51px',
        fontWeight: 'bold',
        fontSize: '40px',
        lineHeight: '40px',
        borderRadius: '50%',
        border: 'transparent',
        backgroundColor: '#B78300',
        color: '#FFF',
        cursor: 'pointer',
    },
});

const Pages = [
    'General information', 'Tokenomics', 'Presale information'
]

const TokenEditModal = ({ setIsOpen, tokenAddress, tokenData }) => {
    const classes = useStyles();
    const [page, setPage] = useState(1)
    const { addTokenInfo } = useGoogleSheet(SHEET_ID, 60000)
    const [tokenInfo, setTokenInfo] = useState(null)

    useEffect(() => {
       setTokenInfo(tokenData)
    }, [tokenData])

    const changeInfo = (name, value) => {
        const token_info = {...tokenInfo}
        token_info[name] = value
        setTokenInfo(token_info)    
    }

    const saveInfo = async () => {
        const res = await addTokenInfo(tokenAddress, tokenInfo)
        setIsOpen(false)
    }

    return (
        <Card className={classes.modal}>
            <button className={classes.btnClose} onClick={() => setIsOpen(false)}>X</button>
            <Box component='h4' sx={{fontSize: '60px', mb: '26px', textAlign: 'center', lineHeight: '58px', color: '#B78300'}}>
                EDIT YOUR TOKEN INFORMATION
            </Box>
            {
                page === 1 ?
                <TokenEditModalGeneralPage value={tokenInfo} changeValue={changeInfo} /> :
                page === 2 ?
                <TokenEditModalTokenomicsPage value={tokenInfo} changeValue={changeInfo} /> :
                <TokenEditModalPresalePage value={tokenInfo} changeValue={changeInfo} />
            }
            
            <PaginationContainer>
                <PaginationNextPage>{page > 1 ? `${Pages[page - 2]}`: ''}</PaginationNextPage>
                <Pagination start={1} end={Pages.length} pageHandler={setPage} page={page} showPageNumber={false} />
                <PaginationPrevPage>{page < 3 ? `${Pages[page]}`: ''}</PaginationPrevPage>
            </PaginationContainer>    

            <Box component='div' sx={{ mt: '57px', width: 257, mx: 'auto'}}>
              <Button
                onClick={saveInfo}
                fullWidth sx={{fontSize: 24, py: 1, height: '47px'}}>SAVE CHNAGES</Button>
            </Box>
        </Card>
    );
};

export default TokenEditModal;


const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`

const PaginationNextPage = styled.label`
    width: 30%;
    font-weight: bold;
    text-align: right;
    margin: auto 4px;
    font-size: 20px;
`

const PaginationPrevPage = styled.label`
    width: 30%;
    font-weight: bold;
    text-align: left;
    margin: auto 4px;
    font-size: 20px;
`
