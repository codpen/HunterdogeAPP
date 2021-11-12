import Web3 from "web3";
import {bscMembershipContract, bscProjectContact, bscTokenContact} from '../contracts'
import ABIMAIN from '../contracts/ABIMAIN.json'
import PROJECTABI from '../contracts/PROJECTABI.json'
import REGISTERABI from '../contracts/REGISTERABI.json'

const web3 = new Web3(Web3.givenProvider)

export const getUserVotes = async (account) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);
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
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);

    await contract.methods.buyVotes(amount)
        .send({from: account})
        .on('receipt', function (receipt) {
            console.log('buy votes', receipt)
        })
        .on('error', function (error, receipt) {
            console.log(error)
        })
}

export const register = async (account) => {
    const address = '0x901fef9F8aF72Ac5777Ec69b812fb31D9C6f5d0b'
    const amount = '115792089237316195423570985008687907853269984665640564039457584007913129639935'
    const contract = new web3.eth.Contract(REGISTERABI, bscTokenContact);

    await contract.methods
        .approve(address, amount)
        .send({from: account})
}

export const membership = async (account) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);

    await contract.methods
        .getMembership()
        .send({from: account})
        .on('receipt', function (receipt) {
            console.log('member', receipt)
        })
        .on('error', function (error, receipt) {
            console.log(error)
        })
}

export const isMember = async (account) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);

    const data =  await contract.methods
        .isMember(account)
        .call()
    console.log(data)
    return data
}

export const returnMembership = async (account) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);

    await contract.methods
        .returnMembership()
        .send({from: account})
}