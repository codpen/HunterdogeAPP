import React from 'react';
import Paws from "../images/paws_bg.svg";
import Loupe from "../images/loupe_bg.svg";
import Bow from "../images/bow_bg.svg";
import Menu from "../blocks/menu";
import CardNft from "../components/card";
import {Box} from "@mui/system";
import {Stack} from "@mui/material";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Pagination from "../components/pagination/Pagination";
import News from "../components/promotedPresales/news";
import Modal from "../components/modal/Modal";
import NoPresaleView from "../components/chartsViews/NoPresale";
import LiveChart from "../components/chartsViews/LiveChart";

const useStyles = makeStyles({
    root: {
        padding: '0 50px',
        maxWidth: '1161px',
        width: '100%',
    },
    card: {}
});

const NftGallery = () => {
    const classes = useStyles();
    return (
        <>
            <Stack direction="row" alignItems="start"
                   sx={{
                       mt: 5,
                       pl: '44px',
                       pr: '51px',
                       backgroundImage: `url(${Paws}), url(${Loupe}), url(${Bow})`,
                       backgroundRepeat: 'no-repeat',
                       // backgroundSize:'100% 100%',
                       backgroundPosition: 'top 130px left 330px, top 130px right 340px, top 950px left 315px',
                   }}
            >

                <Menu/>
                <Grid className={classes.root}>
                    <NoPresaleView />
                    <LiveChart />
                </Grid>

            </Stack>

        </>
    );
};

export default NftGallery;
