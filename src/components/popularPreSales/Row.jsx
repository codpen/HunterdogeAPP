import React from 'react';
import {Stack, TableCell, TableRow, Typography} from "@material-ui/core";
import {Box} from "@mui/system";
import logo from "../../images/hunter_logo.png";
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
                <Stack direction="row" alignItems="center" >
                    <Typography variant="h6" sx={{mr:'36px'}}>
                        {index+1}.
                    </Typography>
                    <Box component="img" src={logo} sx={{width: '66px'}}/>
                </Stack>
            </TableCell>
            <TableCell >
                <Stack sx={{textAlign: 'left'}}>
                    <Typography variant="h5">
                        {data.Project_Name}
                    </Typography>
                    <Typography variant="body2"
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 300,
                                    mt: '5px',
                                    mb: '10px'
                                }}
                    >
                        (Sale ID: 103432)
                    </Typography>
                    <Typography variant="body1"
                                sx={{fontSize: 12}}
                    >
                        Start Time: 5:00 PM - 17 SEPT
                    </Typography>
                </Stack>
            </TableCell>
            <TableCell >
                <Typography variant="h6" sx={{fontWeight: 900}}>
                    {data.Project_Symbol}
                </Typography>
            </TableCell>
            <TableCell >
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1">
                        SOFT
                    </Typography>
                    <Typography variant="body1" sx={{fontWeight: 500}}>
                        1500 BNB
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1">
                        HARD
                    </Typography>
                    <Typography variant="body1" sx={{fontWeight: 500}}>
                        3000 BNB
                    </Typography>
                </Stack>
            </TableCell>
            <TableCell >
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1">
                        MIN.
                    </Typography>
                    <Typography variant="body1" sx={{fontWeight: 500}}>
                        0.1 BNB
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1">
                        MAX.
                    </Typography>
                    <Typography variant="body1" sx={{fontWeight: 500}}>
                        5.0 BNB
                    </Typography>
                </Stack>
            </TableCell>
            <TableCell >
                <Stack direction="row" alignItems="center">
                    <Typography variant="table" sx={{width: '50px'}}>
                        {votes}
                    </Typography>
                    <VoteWrapper>
                        <ButtonRed onClick={() => downVoteProject( 1, account)} height={'22px'} weight={'700'} size={'12px'}>
                            VOTE - 1
                        </ButtonRed>
                        <ButtonYellow onClick={() => upVoteProject( 2, account)} height={'22px'} weight={'700'}  size={'12px'}>
                            VOTE + 2
                        </ButtonYellow>
                        <ButtonGreen onClick={() => upVoteProject( 1, account)} height={'22px'} weight={'700'}  size={'12px'}>
                            VOTE + 1
                        </ButtonGreen>
                    </VoteWrapper>
                    <More>...</More>
                </Stack>
            </TableCell>
        </TableRow>
    );
};

export default Row;
