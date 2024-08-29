/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */

'use client';

import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK, UserInfo } from '@web3auth/base';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
// IMP START - Quick Start
import { Web3Auth } from '@web3auth/modal';
import { useEffect, useState } from 'react';

// IMP START - Blockchain Calls
import RPC from '../../auth/ethersRPC';
// import RPC from "./viemRPC";
// import RPC from "./web3RPC";
// IMP END - Blockchain Calls

// IMP START - Dashboard Registration
const clientId = 'BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ'; // get from https://dashboard.web3auth.io
// IMP END - Dashboard Registration

// IMP START - Chain Config
const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: '0xaa36a7',
  rpcTarget: 'https://rpc.ankr.com/eth_sepolia',
  // Avoid using public rpcTarget in production.
  // Use services like Infura, Quicknode etc
  displayName: 'Ethereum Sepolia Testnet',
  blockExplorerUrl: 'https://sepolia.etherscan.io',
  ticker: 'ETH',
  tickerName: 'Ethereum',
  logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
};
// IMP END - Chain Config

// IMP START - SDK Initialization
const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

const web3auth = new Web3Auth({
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider,
});

export const useWeb3Modal = () => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [balance, setBalance] = useState('');
  const [address, setAddress] = useState('');
  const [userInfo, setUserInfo] = useState<Partial<UserInfo>>();

  useEffect(() => {
    const init = async () => {
      try {
        // IMP START - SDK Initialization
        await web3auth.initModal();
        // IMP END - SDK Initialization
        setProvider(web3auth.provider);
      } catch (error) {
        console.error(error);
      }
    };

    init();
    setDetails();
  }, []);

  const login = async () => {
    // IMP START - Login
    const web3authProvider = await web3auth.connect();
    // IMP END - Login
    setProvider(web3authProvider);
  };

  const logout = async () => {
    // IMP START - Logout
    await web3auth.logout();
    // IMP END - Logout
    setProvider(null);
    uiConsole('logged out');
  };

  const setDetails = async () => {
    if (!provider) {
      uiConsole('provider not initialized yet');
      return;
    }
    // await getBalance();
    // IMP START - Get User Information
    const user = await web3auth.getUserInfo();
    const address = await RPC.getAccounts(provider);
    const balance = await RPC.getBalance(provider);

    setAddress(address);
    setUserInfo(user);
    setBalance(balance);
  };

  const signMessage = async () => {
    if (!provider) {
      uiConsole('provider not initialized yet');
      return;
    }
    const signedMessage = await RPC.signMessage(provider);
    uiConsole(signedMessage);
    return signedMessage;
  };

  const sendTransaction = async () => {
    if (!provider) {
      uiConsole('provider not initialized yet');
      return;
    }
    uiConsole('Sending Transaction...');
    const transactionReceipt = await RPC.sendTransaction(provider);
    uiConsole(transactionReceipt);
    return transactionReceipt;
  };
  // IMP END - Blockchain Calls

  function uiConsole(...args: any[]): void {
    const el = document.querySelector('#console>p');
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
      console.log(...args);
    }
  }

  return {
    sendTransaction,
    signMessage,
    address,
    userInfo,
    logout,
    login,
    balance: web3auth,
    isLoggedIn: web3auth.connected,
    status: web3auth.status,
    enableMFA: web3auth.enableMFA(),
  };
};
