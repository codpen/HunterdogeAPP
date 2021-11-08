import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Box} from "@mui/system";
import arrowLeft from '../../images/left.png';
import arrowRight from '../../images/right.png';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer'
    },
    content: {
        fontFamily: 'Monster Hunter Staggered',
        fontSize: '44px',
        color: '#B78300'
    }
});

export default function Pagination({count}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <button className={classes.btn}>
                <Box component='img' src={arrowLeft}/>
            </button>
            <Box component='h5' sx={{fontSize: '44px', mx: '11px'}}>
                {1} / {count}
            </Box>
            <button className={classes.btn}>
                <Box component='img' src={arrowRight}/>
            </button>
        </div>
    );
}
