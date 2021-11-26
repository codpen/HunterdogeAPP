import Web3 from "web3";
import { bscMembershipContract, bscProjectContact, bscTokenContact, bscFactorContact, bscWBNBContact } from '../contracts'
import ABIMAIN from '../contracts/ABIMAIN.json'
import PROJECTABI from '../contracts/PROJECTABI.json'
import REGISTERABI from '../contracts/REGISTERABI.json'
import ERC20ABI from '../contracts/ERC20_ABI.json'
import ABIMCAP from '../contracts/MCAP.json'
import FACTORYABI from '../contracts/FACTORYABI.json'
import PAIRABI from '../contracts/PAIRABI.json'
import { networks } from "../networks";

const web3 = new Web3(Web3.givenProvider)

export const getUserVotes = async (account) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);
    const votes = await contract.methods.getUserVotes(account).call();
    return votes
}

export const getVotesPerProject = async (address) => {
    const contract = new web3.eth.Contract(PROJECTABI, bscProjectContact);


    try {
        const isActive = await contract.methods.isActive(address).call()
        if (isActive) {
            console.log('active', address)
            return await contract.methods.getVotesPerProject(address).call()
        }
    } catch (e) {
        console.warn('error', e)
    }
}

export const downVoteProject = async (vote, account, address) => {
    const contract = new web3.eth.Contract(PROJECTABI, bscProjectContact);

    try {
        const isActive = await contract.methods.isActive(address).call()
        if (isActive) {
            await contract.methods
                .downVoteProject(vote, address)
                .send({ from: account })
        }
    } catch (e) {
        alert('The project is not registered');
    }
}

export const upVoteProject = async (vote, account, address) => {
    const contract = new web3.eth.Contract(PROJECTABI, bscProjectContact);

    try {
        const isActive = await contract.methods.isActive(address).call()
        if (isActive) {
            await contract.methods
                .upVoteProject(vote, address)
                .send({ from: account })
        }
    } catch (e) {
        alert('The project is not registered');
    }
}

export const buyVotes = async (account, amount) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);

    await contract.methods.buyVotes(amount)
        .send({ from: account })
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
        .send({ from: account })
}

export const membership = async (account) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);

    await contract.methods
        .getMembership()
        .send({ from: account })
        .on('receipt', function (receipt) {
            console.log('member', receipt)
        })
        .on('error', function (error, receipt) {
            console.log(error)
        })
}

export const membershipCosts = async () => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);
    try {
        const result = await contract.methods.membershipCosts().call()

        return web3.utils.fromWei(result)
    } catch (e) {
        console.log('membershipCosts', e)
    }


}

export const isMember = async (account) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);

    const data = await contract.methods
        .isMember(account)
        .call()
    return data
}

export const isProjectManager = async (tokenAddress, account) => {
    const contract = new web3.eth.Contract(PROJECTABI, bscProjectContact);
    let data = await contract.methods.ProjectStore(tokenAddress).call()
    if (data.ProjectManager === account) return true
    else return false
}

export const isManager = async (account) => {
    const contract = new web3.eth.Contract(PROJECTABI, bscProjectContact);
    let res = await contract.methods.Managers(account).call()
    return res
}

export const addProject = async (tokenInfo, account) => {
    const contract = new web3.eth.Contract(PROJECTABI, bscProjectContact);
    const res = await contract.methods.addProject(
        tokenInfo.Pproject_Name ? tokenInfo.Pproject_Name : '',
        tokenInfo.Project_Symbol ? tokenInfo.Project_Symbol : '',
        tokenInfo.Project_Logo ? tokenInfo.Project_Logo : '',
        tokenInfo.Project_Website ? tokenInfo.Project_Website : '',
        tokenInfo.Project_Telegram ? tokenInfo.Project_Telegram : '',
        tokenInfo.Project_Twitter ? tokenInfo.Project_Twitter : '',
        tokenInfo.Project_Address ? tokenInfo.Project_Address : '',
        tokenInfo.Project_Manager ? tokenInfo.Project_Manager : ''
    ).send({ from: account })
    console.log('tx res-----', res)
    return res
}

export const editProject = async (tokenInfo, account) => {
    const contract = new web3.eth.Contract(PROJECTABI, bscProjectContact);
    const res = await contract.methods.editProject(
        tokenInfo.Pproject_Name ? tokenInfo.Pproject_Name : '',
        tokenInfo.Project_Symbol ? tokenInfo.Project_Symbol : '',
        tokenInfo.Project_Logo ? tokenInfo.Project_Logo : '',
        tokenInfo.Project_Website ? tokenInfo.Project_Website : '',
        tokenInfo.Project_Telegram ? tokenInfo.Project_Telegram : '',
        tokenInfo.Project_Twitter ? tokenInfo.Project_Twitter : '',
        tokenInfo.Project_Address ? tokenInfo.Project_Address : '',
    ).send({ from: account })
    console.log('tx res-----', res)
    return res
}

export const returnMembership = async (account) => {
    const contract = new web3.eth.Contract(ABIMAIN, bscMembershipContract);

    await contract.methods
        .returnMembership()
        .send({ from: account })
}

export const getMCap = async (address, price) => {

    try {
        const contract = new web3.eth.Contract(ABIMCAP, address);

        const total = await contract.methods
            .totalSupply()
            .call()

        const decimals = await contract.methods
            .decimals()
            .call()

        const mcap = (total / 10 ** decimals) * price
        return mcap
    } catch (error) {
        return 0
    }
}

export const getSymbol = async (address) => {
    try {
        const contract = new web3.eth.Contract(ABIMCAP, address);

        const symbol = await contract.methods
            .symbol()
            .call()
        return symbol
    } catch (error) {
        return ''
    }
}

export const getName = async (address) => {
    try {
        const contract = new web3.eth.Contract(ABIMCAP, address);

        const symbol = await contract.methods
            .name()
            .call()
        return symbol
    } catch (error) {
        return ""
    }
}

export const getPair = async (address) => {
    try {
        const contract = new web3.eth.Contract(FACTORYABI, bscFactorContact)

        const pair = await contract.methods.getPair(bscWBNBContact, address).call()
        return pair
    } catch (error) {
        return ''
    }
}

export const getBalanceWBNB = async (address) => {
    try {
        const contract = new web3.eth.Contract(PAIRABI, bscWBNBContact)

        const balance = await contract.methods.balanceOf(address).call()
        return web3.utils.fromWei(balance, 'ether')
    } catch (error) {
        console.log(error)
        return ''
    }
}

export const getBalanceToken = async (address, token) => {
    try {
        const contract = new web3.eth.Contract(ERC20ABI, token)
        let decimals_local = await contract.methods.decimals().call()
        let balance = await contract.methods.balanceOf(address).call()
        return (balance / 10**decimals_local)
    } catch (error) {
        console.log(error)
        return ''
    }
}


export const isHoneypot = async (address) => {
    let bnbIN = 1000000000000000000;
    let maxTXAmount = 0;
    let maxSell = 0;
    const hWeb3 = new Web3(networks.bsc_main);
    const getBNBIn = async (address) => {
        let amountIn = maxTXAmount;
        if(maxSell != 0) {
            amountIn = maxSell;
        }
        let WETH = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
        let path = [address, WETH];
        let sig = hWeb3.eth.abi.encodeFunctionCall({
            name: 'getAmountsOut',
            type: 'function',
            inputs: [
                {type: 'uint256', name: 'amountIn'},
                {type: 'address[]', name: 'path'},
            ],
            outputs: [
                {type: 'uint256[]', name: 'amounts'},
            ],
        }, [amountIn, path]);
    
        let d = {
            to: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
            from: '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',
            value: 0,
            gas: 15000000,
            data: sig,
        };
        try {
            let val = await hWeb3.eth.call(d);
            let decoded = hWeb3.eth.abi.decodeParameter('uint256[]', val);
            bnbIN = hWeb3.utils.toBN(decoded[1]);
        } catch (e) {
            console.log(e);
        }
    }
    
    const getMaxes = async () => {
        let sig = hWeb3.eth.abi.encodeFunctionSignature({name: '_maxTxAmount', type: 'function', inputs: []});
        let d = {
            to: address,
            from: '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',
            value: 0,
            gas: 15000000,
            data: sig,
        };
        try {
            let val = await hWeb3.eth.call(d);
            maxTXAmount = hWeb3.utils.toBN(val);
        } catch (e) {
            sig = hWeb3.eth.abi.encodeFunctionSignature({name: 'maxSellTransactionAmount', type: 'function', inputs: []});
            let d = {
                to: address,
                from: '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',
                value: 0,
                gas: 15000000,
                data: sig,
            };
            try {
                let val2 = await hWeb3.eth.call(d);
                maxSell = hWeb3.utils.toBN(val2);
            } catch (e) {
    
            }
        }
    }
    await getMaxes();
    if(maxTXAmount != 0 || maxSell != 0) {
        await getBNBIn(address);
    }

    let encodedAddress = hWeb3.eth.abi.encodeParameter('address', address);
    let contractFuncData = '0xd66383cb';
    let callData = contractFuncData+encodedAddress.substring(2);

    let blacklisted = {
        '0xa914f69aef900beb60ae57679c5d4bc316a2536a': 'SPAMMING SCAM',
        '0x105e62565a31c269439b29371df4588bf169cef5': 'SCAM',
        '0xbbd1d56b4ccab9302aecc3d9b18c0c1799fe7525': 'Error: TRANSACTION_FROM_FAILED'
    };
    let unableToCheck = {
        '0x54810d2e8d3a551c8a87390c4c18bb739c5b2063': 'Coin does not utilise PancakeSwap',
        '0xc0834ee3f6589934dc92c63a893b4c4c0081de06': 'Due to anti-bot, Honeypot is not able to check at the moment.'
    };

    if(blacklisted[address.toLowerCase()] !== undefined) {
        return {is: 'Yes', buy_tax: 0, sell_tax: 0}
    }
    if(unableToCheck[address.toLowerCase()] !== undefined) {
        return {is: 'Unknown', buy_tax: 0, sell_tax: 0}
    }

    let value = 100000000000000000;
    if(bnbIN < value) {
        value = bnbIN - 1000;
    }
    const val = await hWeb3.eth.call({
        to: '0x2bf75fd2fab5fc635a4c6073864c708dfc8396fc',
        from: '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',
        value: value,
        gas: 45000000,
        data: callData,
    })
    let decoded = hWeb3.eth.abi.decodeParameters(['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256'], val);
    let buyExpectedOut = hWeb3.utils.toBN(decoded[0]);
    let buyActualOut = hWeb3.utils.toBN(decoded[1]);
    let sellExpectedOut = hWeb3.utils.toBN(decoded[2]);
    let sellActualOut = hWeb3.utils.toBN(decoded[3]);
    const buy_tax = Math.round((buyExpectedOut - buyActualOut) / buyExpectedOut * 100 * 10) / 10;
    const sell_tax = Math.round((sellExpectedOut - sellActualOut) / sellExpectedOut * 100 * 10) / 10;

    return {is: 'No', buy_tax: buy_tax, sell_tax: sell_tax}
}


export const toChecksumAddress = (address) => {
    try {
        return web3.utils.toChecksumAddress(address)
    } catch (error) {
        console.log(error)
        return ''
    }
}
