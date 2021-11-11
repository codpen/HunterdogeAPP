import styled from "styled-components";
import React, {useState} from "react";
import {downVoteProject, upVoteProject} from "../../../connection/functions";
import {ButtonGreen, ButtonRed, VoteWrapper} from "../index";
import {useWeb3React} from "@web3-react/core";


export const Votes = ({address, big = false}) => {
    const {account} = useWeb3React()
    const [votes, setVotes] = useState(0)
    const [activeBtn, setActiveBtn] = useState('all')
    const voteFor = () => {
        if (votes > 0) {
            upVoteProject(votes, account, address)
            setActiveBtn('all')
        }
    }

    const voteAgainst = () => {
        if (votes > 0) {
            downVoteProject(votes, account, address)
            setActiveBtn('all')
        }
    }
    return (<VoteWrapper big={big}>
            {activeBtn === 'all' ? null
                : <>
                    <Label big={big}>
                        enter the <br/># of votes
                        <Input big={big}  placeholder={0} onChange={(e) => setVotes(e.target.value)}/>
                    </Label>
                    {activeBtn === 'against' ?
                        <ButtonRed onClick={voteAgainst} big={big}>
                            VOTE NOW
                        </ButtonRed>
                        :
                        <ButtonGreen onClick={voteFor} big={big}>
                            VOTE NOW
                        </ButtonGreen>}
                </>}
            {activeBtn === 'all' ?
                <>
                    <ButtonRed onClick={() => setActiveBtn('against')} big={big}>
                        VOTE NOW
                    </ButtonRed>
                    <ButtonGreen onClick={() => setActiveBtn('for')} big={big}>
                        VOTE NOW
                    </ButtonGreen>
                </>
                : null}
        </VoteWrapper>
    )
}

export const Input = styled.input`
  width: ${({big}) => big ? '75px' : '100%'};
  height: 27px;
  border-radius: 5px;
  text-align: center;
  border: none;
  color: #000;
  font-weight: 700;
  font-size: 14px;
  background-color: #FAF0CB;
  transition: 0.4s;
  margin-top: 5px;

  &:focus {
    outline: none;
  }
`

export const Label = styled.label`
  text-transform: lowercase;
  font-size: ${({big}) => big ? '18px' : '13px'};
  line-height: 15px;
  color: #775600;
  font-weight: 600;
`