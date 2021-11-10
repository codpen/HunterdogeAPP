import React from 'react';
import CardNft from "../components/card";
import {Box} from "@mui/system";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Pagination from "../components/pagination/Pagination";

import nft_1 from '../images/NFT/1. NFT_HunterChasingHotDog(e)s.gif';
import nft_2 from '../images/NFT/2. NFT_HunterLostInSpace.gif';
import nft_3 from '../images/NFT/3. NFT_HunterReadyForTheRace.gif';

import News from "../components/promotedPresales/news";
import Modal from "../components/modal/Modal";
import NoPresaleView from "../components/chartsViews/noPresale/NoPresale";
import LiveChart from "../components/chartsViews/liveChart/LiveChart";


const useStyles = makeStyles({
    root: {
        boxSizing: 'border-box',
        padding: '0 50px',
        maxWidth: '1161px',
        // maxWidth: '1420px',
        width: '100%',
        gap: '40px'
    },
    card: {}
});

const data = [nft_1, nft_2, nft_3]

const NftGallery = () => {
    const classes = useStyles();

    return (
        <div>
            <Box component='h2' sx={{fontSize: '60px', textAlign: 'center', mb: '41px'}}>
                Hunter’s nfts
            </Box>
            <Grid className={classes.root} container justifyContent="center">
                {data.map((value, idx) => (
                    <Grid key={idx} item justifyContent='center' spacing={2}>
                        <CardNft image={value}/>
                    </Grid>
                ))}
            </Grid>
            {/*<Pagination count={56}/>*/}
        </div>
    );
};

export default NftGallery;
