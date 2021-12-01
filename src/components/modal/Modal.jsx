import React from 'react';
import {buyVotes} from "../../connection/functions";
import {useWeb3React} from "@web3-react/core";
import { useWallet } from "@binance-chain/bsc-use-wallet";
import {Button, Flex, Image} from "../common";
import {CloseButton, ImageWrapper, ModalCard, Text, Title, VotesWrapper, Wrapper} from "./StyledModal";
import assets from '../../images/cryptoAsset.svg'

const data = [
    {id: '222', value: '1 vote', votes: 1},
    {id: '223', value: '5 votes', votes: 5},
    {id: '224', value: '10 votes', votes: 10},
    {id: '225', value: '25 votes', votes: 25},
    {id: '226', value: '50 votes', votes: 50},
    {id: '227', value: '100 votes', votes: 100},
    {id: '228', value: '250 votes', votes: 250},
    {id: '229', value: '500 votes', votes: 500},
]

const Modal = ({ setIsOpen }) => {
    // const {account} = useWeb3React()
    const { account, chainId } = useWallet();
    const buy = (votes) => {
        if (account) {
            buyVotes(account, votes)
        } else {
            alert('You need to connect wallet')
        }
    }

    return (
        <Wrapper>
            <ModalCard>
                <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
                <Flex direction={'column'}>
                    <Title size={'70px'}>Buy votes</Title>
                    <Text margin={'22px 0'}>
                        How many votes do you want do buy?
                    </Text>
                </Flex>
                <div>
                    {data.map((item) =>
                        <VotesWrapper key={item.id} >
                            <Text size={'24px'}>
                                {item.value}
                            </Text>
                            <Button size={'18px'} weight={'800'} margin={'0 0 0 61px'} width={'200px'} onClick={() => buy(item.votes)}>Buy now</Button>
                        </VotesWrapper>
                    )}
                </div>
                <ImageWrapper><Image src={assets}/></ImageWrapper>
            </ModalCard>
        </Wrapper>
    );
};

export default Modal;

