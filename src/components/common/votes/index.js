import React, {useContext, useState} from "react";
import {downVoteProject, upVoteProject, medVoteProject} from "../../../connection/functions";
import {Button, ButtonGreen, ButtonRed, ButtonYellow, VoteWrapper} from "../index";
import {useWeb3React} from "@web3-react/core";
import { useWallet } from "@binance-chain/bsc-use-wallet";
import {ExtraSmall, Input, Modal} from "./VotesStyled";
import { ModalContext } from "../../../contexts/ModalProvider";


export const Votes = ({address, big = false, height, size}) => {
    // const {account, chainId} = useWeb3React()
    const { account, chainId, ethereum } = useWallet();
    const [votes, setVotes] = useState(0)
    const [activeBtn, setActiveBtn] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const context = useContext(ModalContext)

    const voteUp = () => {
        if (chainId === 56) {
            if (votes > 0) {
                upVoteProject(ethereum, votes, account, address)
                setActiveBtn(false)
                setIsOpen(false)
            }
        } else {
            console.warn('Please connect your wallet to Binance Smart Chain network')
        }
    }

    const voteMed = () => {
        if (chainId === 56) {
            if (votes > 0) {
                medVoteProject(ethereum, votes, account, address)
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
                downVoteProject(ethereum, votes, account, address)
                setActiveBtn(false)
                setIsOpen(false)
            }
        } else {
            console.warn('Please connect your wallet to Binance Smart Chain network')
        }
    }

    const activeInput = async () => {
        if(context.isMember[account]) {
            setActiveBtn(!activeBtn)
            setIsOpen(false)
        } else {
            alert('You need to register yourself first(for free)')
        }
    }

    return (<VoteWrapper big={big}>
            {activeBtn && <Input big={big}
                                 placeholder='enter number of the votes'
                                 onChange={(e) => setVotes(e.target.value)}
                                 onClick={() => setIsOpen(true)}
            />}
            {isOpen && <Modal big={big}>
                <ButtonGreen onClick={() => voteUp()} >vote <ExtraSmall> x </ExtraSmall> 2</ButtonGreen>
                <ButtonYellow onClick={() => voteMed()}>vote <ExtraSmall> x </ExtraSmall> 1</ButtonYellow>
                <ButtonRed onClick={voteAgainst}>vote <ExtraSmall> x </ExtraSmall> -1</ButtonRed>
            </Modal>}
            <Button margin={big && '0 0 0 auto'}
                    width={'79px'}
                    size={size || undefined}
                    height={activeBtn ? (height || '28px') : (height || '')}
                    onClick={activeInput}>Vote</Button>
        </VoteWrapper>
    )
}