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

const useStyles = makeStyles({
    root: {
        boxSizing: 'border-box',
        padding: '0 53px',
        maxWidth: '1161px',
        width: '100%',
        gap: '52px'
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
                <div>
                    <Box component='h2' sx={{fontSize: '60px', textAlign: 'center', mb: '41px'}}>
                        Hunter’s nfts
                    </Box>
                    <Grid className={classes.root} container justifyContent="center">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                            <Grid key={value} item justifyContent='center' spacing={2}>
                                <CardNft/>
                            </Grid>
                        ))}
                    </Grid>
                    <Pagination count={56}/>
                </div>
                <Stack>
                    <News/>
                </Stack>
            </Stack>

        </>
    );
};

export default NftGallery;
