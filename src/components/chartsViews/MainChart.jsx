import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        content: {
            maxWidth: '1420px',
            height: '762px',
            background: '#FFFFFF',
            boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.1)',
            borderRadius: '25px',
            alignItems: 'center',
        },
    },
});

const MainChart = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <AppBar position="static">
                <Tabs aria-label="simple tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three"  />
                </Tabs>
            </AppBar>

        </Grid>

    );
};

export default MainChart;

// function TabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;
//
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }
//
// function a11yProps(index: any) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }
//
// const useStyles = makeStyles((theme: Theme) => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));
//
// export default function SimpleTabs() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);
//
//     const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//         setValue(newValue);
//     };
//
//     return (
//         <div className={classes.root}>
//             <AppBar position="static">
//                 <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//                     <Tab label="Item One" {...a11yProps(0)} />
//                     <Tab label="Item Two" {...a11yProps(1)} />
//                     <Tab label="Item Three" {...a11yProps(2)} />
//                 </Tabs>
//             </AppBar>
//             <TabPanel value={value} index={0}>
//                 Item One
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//                 Item Two
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//                 Item Three
//             </TabPanel>
//         </div>
//     );
// }
