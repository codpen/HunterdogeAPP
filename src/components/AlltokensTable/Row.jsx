import React from 'react';
import {Stack, TableCell, TableRow, Typography} from "@material-ui/core";
import {Box} from "@mui/system";
import logo from "../../images/hunter_logo.png";
import {ReactComponent as IconReward} from "../../images/reward_ico.svg";
import {ReactComponent as IconDialogue} from "../../images/dialogue_ico.svg";
import arrowUp from "../../images/arrow-up.svg";
import {LinkWrapper, More} from "../common";
import {useVotesPerProject} from "../../hooks/useVotesPerProject";
import {Votes} from "../common/votes";

const Row = (
{
    data, index
}
) =>
{
    const {votes, error, isLoading} = useVotesPerProject(data.Project_Address)

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center">
                    <Typography variant="h6" sx={{mr: '36px'}}>
                        {index + 1}.
                    </Typography>
                    <Box component="img" src={logo} sx={{width: '66px'}}/>
                </Stack>
            </TableCell>
            <TableCell>
                <LinkWrapper to={`/token/${data.Project_Address}`}>
                    <Stack>
                        <Typography variant="h5">
                            {data.Project_Name}
                        </Typography>
                        <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                            <IconReward/>
                            <IconDialogue/>
                        </Stack>
                    </Stack>
                </LinkWrapper>
            </TableCell>
            <TableCell>
                <Typography variant="h6" sx={{fontWeight: 900}}>
                    {data.Project_Symbol}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    $900’999
                </Typography>
            </TableCell>
            <TableCell>
                <Stack>
                    <Typography variant="table" sx={{pt: '26px'}}>
                        {data.Project_Price}
                    </Typography>
                    <Stack direction="row" sx={{mt: 1}}>
                        <Box component='img' src={arrowUp} sx={{width: '17px', mr: 1}}/>
                        <Typography variant="caption">
                            24H = +12.99%
                        </Typography>
                    </Stack>
                </Stack>
            </TableCell>

            <TableCell>
                <Typography variant="h6">
                    HIGH
                </Typography>
                <Typography variant="h6" sx={{fontSize: 16, fontWeight: 600}}>
                    0.67
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table">
                    322’000’222
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="table" sx={{textTransform: 'capitalize'}}>
                    Very high
                </Typography>
            </TableCell>
            <TableCell>
                <Stack direction="row" alignItems="center">
                    <Typography variant="table" sx={{width: '50px'}}>
                        {votes}
                    </Typography>
                    <Votes address={data.Project_Address}/>
                    <More>...</More>
                </Stack>
            </TableCell>
        </TableRow>
    )
}
;

export default Row;
