import React, {useEffect, useState} from 'react'
import {Stack} from '@mui/material';
import AllTokensTable from '../components/AlltokensTable';
import PopularPreSales from '../components/popularPreSales';
import SearchOrFilter from '../components/searchOrFilter';
import {isMember} from '../connection/functions';
import {useWallet} from "@binance-chain/bsc-use-wallet";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const AllTokens = () => {
    const mobileMatches = useMediaQuery('(min-width:600px)');

    const {account, chainId} = useWallet();
    const [checkMember, setCheckMember] = useState(false)
    useEffect(() => {
        const getIsMember = async () => {
            const is_member = await isMember(account)
            setCheckMember(is_member)
        }
        if (account) getIsMember()
        else setCheckMember(false)
    }, [account])

    return (
        <Stack sx={{mx: mobileMatches ? '60px' : 'auto'}}>
            {checkMember && <SearchOrFilter/>}
            <AllTokensTable/>
            <Stack direction="row" alignItems="center" sx={{gap: 8}}>
                <PopularPreSales/>
                {}
            </Stack>
        </Stack>
    )
}

export default AllTokens;