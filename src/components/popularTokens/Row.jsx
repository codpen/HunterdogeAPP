import React from 'react';
import {Stack, TableCell, TableRow, Typography} from "@material-ui/core";
import {Box} from "@mui/system";
import logo from "../../images/hunter_logo.png";
import {ReactComponent as IconReward} from "../../images/reward_ico.svg";
import {ReactComponent as IconDialogue} from "../../images/dialogue_ico.svg";
import arrowUp from "../../images/arrow-up.svg";
import {ButtonGreen, ButtonRed, ButtonYellow, More, VoteWrapper} from "../common";
import {useVotesPerProject} from "../../hooks/useVotesPerProject";
import {useWeb3React} from "@web3-react/core";
import { upVoteProject, downVoteProject } from '../../connection/functions';

const Row = ({data, index}) => {
    const {votes, error, isLoading} = useVotesPerProject(data.Project_Address)
    const {account, chainId} = useWeb3React()
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
                <Stack>
                    <Typography variant="h5">
                        {data.Project_Name}
                    </Typography>
                    <Stack direction="row" sx={{gap: 2, mt: '14px'}}>
                        <IconReward/>
                        <IconDialogue/>
                    </Stack>
                </Stack>
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
                <Stack direction="row" alignItems="center">
                    <Typography variant="table" sx={{width: '50px'}}>
                        {votes}
                    </Typography>
                    <VoteWrapper>
                        <ButtonRed onClick={() => downVoteProject( 1, account)} height={'22px'} weight={'700'} size={'12px'}>
                            VOTE - 1
                        </ButtonRed>
                        <ButtonYellow onClick={() => upVoteProject( 2, account)} height={'22px'} weight={'700'} size={'12px'}>
                            VOTE + 2
                        </ButtonYellow>
                        <ButtonGreen onClick={() => upVoteProject( 1, account)} height={'22px'} weight={'700'} size={'12px'}>
                            VOTE + 1
                        </ButtonGreen>
                    </VoteWrapper>
                    <More>...</More>
                </Stack>
            </TableCell>
        </TableRow>
    )
};

export default Row;
