import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles({
    root: {
        maxWidth: '1420px',
        background: '#FFFFFF',
        boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
        border: '3px solid #FFF3D4',
        borderRadius: '25px',
        borderTopLeftRadius: 0,
        padding: '35px',
        flexWrap: 'nowrap',
    },
    title: {
        fontSize: '15.57px',
        lineHeight: '15px',
        fontWeight: '400',
        marginTop: '24px',
        textTransform: 'uppercase'
    },
    subTitle: {
        fontSize: '19px',
        lineHeight: '19px',
        fontWeight: '800',
        marginTop: '10px'
    },
    imgContainer: {
        maxWidth: '828px',
        width: '100%',
        marginRight: '48px',
    },
    good: {
        textAlign: 'center',
        backgroundColor: '#CDFEC5',
        color: '#4EC505',
        padding: '5px 0',
        height: '28px',
        width: '64px',
        fontSize: '19px',
        borderRadius: '9px',
        marginTop: '6px',
    },
    tabs: {
        width: '177px',
        height: '28px',
        background: '#FFFBE2',
        borderRadius: '9px',
        padding: '8px 9px',
        color: '#B78300',
        fontSize: '12px',
        lineHeight: '11px',
        boxShadow: '2px 2px 0px rgb(0 0 0 / 10%)',
        marginLeft: '42px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    liveChartTitle: {fontSize: '21px', fontWeight: '800', lineHeight: '21px', marginRight: '22px'},
    liveChartSubTitle: {fontSize: '21px', fontWeight: '300', fontStyle: 'italic', lineHeight: '21px'},
    stats: {fontSize: '21px', fontWeight: '800', lineHeight: '21px', marginBottom: '11px'},
    stockBtn: {
        height: '46px',
        padding: '6px 13px',
        border: 'none',
        background: '#FFFBE2',
        borderRadius: '11px',
        color: '#B78300',
        fontWeight: '800',
        fontSize: '18px',
        boxShadow: '2px 2px 0px rgb(0 0 0 / 10%)',
        cursor: 'pointer',

        display: 'flex',
        alignItems: 'center',
    },
    wrapperBtn: {
        flexWrap: 'wrap',
        gap: '7px',
        marginTop: '10px',
        maxWidth: '440px'
    },
    redBtn: {
        width: '209px',
        height: '29px',
        background: '#EE7541',
        borderRadius: '20px',
        boxShadow: '4px 4px 0px rgb(0 0 0 / 10%)',
        border: 'none',
        cursor: 'pointer'
    },
    beigeBtn: {
        marginLeft: '14px',
        width: '158px',
        height: '29px',
        background: '#FFFBE2',
        borderRadius: '20px',
        boxShadow: '4px 4px 0px rgb(0 0 0 / 10%)',
        border: 'none',
        cursor: 'pointer'
    },
    divider: {
        width: '2px',
        height: '592px',
        backgroundColor: '#FFFBE2',
        marginRight: '29px',
        marginTop: '23px'
    }
});
