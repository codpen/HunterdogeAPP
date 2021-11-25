import {Stack, Typography} from "@material-ui/core";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useState} from "react";

const CheckboxShow = ({handler}) => {
    const [checked, setChecked] = useState([true, false, false]);

    const handleChange1 = (event) => {
        setChecked([true, false, false]);
        handler(25)
    };

    const handleChange2 = (event) => {
        setChecked([false, true, false]);
        handler(50)
    };

    const handleChange3 = (event) => {
        setChecked([false, false, true]);
        handler(100)
    };
    return (
        <Stack direction="row" alignItems="center" sx={{mr: 30}}>
            <Typography sx={{mr: 3}}>
                Show
            </Typography>
            <FormControlLabel  control={<Checkbox onChange={handleChange1} checked={checked[0]} sx={{
                root: {
                    color: 'red',
                },
                '&.Mui-checked': {
                    color: '#AB882E',
                },
                svg: {
                    fill: '#AB882E',
                }
            }}/>} label="25"/>
            <FormControlLabel  control={<Checkbox onChange={handleChange2} checked={checked[1]} sx={{
                root: {
                    color: 'red',
                },
                '&.Mui-checked': {
                    color: '#AB882E',
                },
                svg: {
                    fill: '#AB882E',
                }

            }}/>} label="50"/>
            <FormControlLabel control={<Checkbox onChange={handleChange3} checked={checked[2]} sx={{
                root: {
                    color: 'red',
                },
                '&.Mui-checked': {
                    color: '#AB882E',
                },
                svg: {
                    fill: '#AB882E',
                }
            }}/>} label="100"/>
            <Typography>
                per page
            </Typography>
        </Stack>
    )
}

export default CheckboxShow;