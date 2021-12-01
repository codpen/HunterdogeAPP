import React, { useState, useEffect, useContext } from "react";
import { useWallet } from "@binance-chain/bsc-use-wallet";
import { useWalletModal } from "@pancakeswap-libs/uikit";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from '@web3-react/injected-connector'
import {Button} from "@mui/material";

export const injected = new InjectedConnector({
    supportedChainIds: [56],
})

export default function ConnectWallet() {
    const { active, account: web3Account, activate, deactivate } = useWeb3React()
    const { account, connect, reset, status, chainId, error } = useWallet();
    
    const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
      (data) => connect(data),
      () => reset(),
      account
    );

    useEffect(() => {
        if (status === 'connected') {
            // activate(injected);
        }
        if (status === 'disconnected') {
            // deactivate()
        }
        if (error) alert('Change network to Binance Smart Chain Network')
    }, [status, error])

    return (
        <header className="bsc-Header ani-1">
            <div className="bscHeadContainer">
                <div className="headBar02" >
                    {account ?
                        <Button onClick={onPresentAccountModal} sx={{ width: '100%', border: '10px solid B78300' }}>
                            DISCONNECT {account.slice(0,6) + '...' + account.slice(-4)}
                        </Button>
                        :
                        <Button onClick={onPresentConnectModal} sx={{ width: '100%', border: '10px solid B78300' }}>
                            {'Connect Wallet'}
                        </Button>
                    }
                    <a href="javascript:void(0);" className="headIndiBTN"></a> 
                </div>
            </div>
        </header>
    )
}

