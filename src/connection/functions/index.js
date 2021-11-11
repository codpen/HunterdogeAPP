import Web3 from "web3";
import {bscMainContract, bscProjectContact} from '../contracts'
import ABIMAIN from '../contracts/ABIMAIN.json'
import PROJECTABI from '../contracts/PROJECTABI.json'

const web3 = new Web3(Web3.givenProvider)

export const getUserVotes = async (account) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMainContract);
    const votes = await contract.methods.getUserVotes(account).call();
    return votes
}

export const getVotesPerProject = async (address) => {
    const contract = new web3.eth.Contract(PROJECTABI, bscProjectContact);
    const isActive = await contract.methods.isActive(address).call()
    if (isActive) {
        return  await contract.methods.getVotesPerProject(address).call()
    } else {
        throw new Error('The project is not registered');

    }
}

export const downVoteProject = async (vote, account, address) => {
  const contract = new web3.eth.Contract(PROJECTABI, bscProjectContact);
    const isActive = await contract.methods.isActive(address).call()
    if (isActive) {
        await contract.methods
            .downVoteProject(vote, address)
            .send({from: account})
    } else {
        alert('The project is not registered');
    }
}

export const upVoteProject = async (vote, account, address) => {
  const contract = new web3.eth.Contract(PROJECTABI, bscProjectContact);
    const isActive = await contract.methods.isActive(address).call()
    if (isActive) {
        await contract.methods
            .upVoteProject(vote, address)
            .send({from: account})
    } else {
        alert('The project is not registered');
    }
}

export const buyVotes = async (account, amount) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMainContract);

    await contract.methods.buyVotes(amount)
        .send({from: account})
        .on('receipt', function (receipt) {
            console.log('buy votes', receipt)
        })
        .on('error', function (error, receipt) {
            console.log(error)
        })
}