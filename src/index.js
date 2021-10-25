/* eslint-disable no-extend-native */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/monsterhunter.ttf';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Web3Provider } from '@ethersproject/providers';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';

import Web3ReactManager from './connection/Web3ReactManager.jsx'
import { Web3ContractProvider } from './connection/web3Contract.jsx'
import { theme } from './theme';
// import { createTheme } from '@mui/material';
// import { createTheme } from '@mui/system';

// import { createTheme } from '@mui/material/styles';
// createTheme
// createTheme


Number.prototype.toFixedDown = function (digits) {
  const re = new RegExp('(\\d+\\.\\d{' + digits + '})(\\d)'),
    m = this.toString().match(re);
  return m ? parseFloat(m[1]) : this.valueOf();
};

const NetworkContextName = 'NETWORK';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}
 
ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Web3ReactManager>
          <Web3ContractProvider>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider> 
          </Web3ContractProvider>
        </Web3ReactManager>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
