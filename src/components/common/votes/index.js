import React, {useState} from "react";
import {downVoteProject, upVoteProject} from "../../../connection/functions";
import {Button, ButtonGreen, ButtonRed, ButtonYellow, VoteWrapper} from "../index";
import {useWeb3React} from "@web3-react/core";
import {ExtraSmall, Input, Modal} from "./VotesStyled";


export const Votes = ({address, big = false}) => {
    const {account, chainId} = useWeb3React()
    const [votes, setVotes] = useState(0)
    const [activeBtn, setActiveBtn] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const voteFor = (x) => {
        if (chainId === 56) {
            if (votes > 0) {
                upVoteProject(votes * x, account, address)
                setActiveBtn(false)
                setIsOpen(false)
            }
        } else {
            console.warn('Please connect your wallet to Binance Smart Chain network')
        }
    }

    const voteAgainst = () => {
        if (chainId === 56) {
            if (votes > 0) {
                downVoteProject(votes, account, address)
                setActiveBtn(false)
                setIsOpen(false)
            }
        } else {
            console.warn('Please connect your wallet to Binance Smart Chain network')
        }
    }

    const activeInput = () => {
        setActiveBtn(!activeBtn)
        setIsOpen(false)
    }

    return (<VoteWrapper big={big}>
            {activeBtn && <Input big={big}
                                 placeholder='enter number of the votes'
                                 onChange={(e) => setVotes(e.target.value)}
                                 onClick={() => setIsOpen(true)}
            />}
            {isOpen && <Modal big={big}>
                <ButtonGreen onClick={() => voteFor(2)} >vote <ExtraSmall> x </ExtraSmall> 2</ButtonGreen>
                <ButtonYellow onClick={() => voteFor(1)}>vote <ExtraSmall> x </ExtraSmall> 1</ButtonYellow>
                <ButtonRed onClick={voteAgainst}>vote <ExtraSmall> x </ExtraSmall> -1</ButtonRed>
            </Modal>}
            <Button margin={big && '0 0 0 auto'}
                    width='79px'
                    height={activeBtn ? '28px' : ''}
                    onClick={activeInput}>Vote</Button>
        </VoteWrapper>
    )
}