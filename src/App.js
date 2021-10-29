import { useState } from 'react';
import Wallet from './components/Wallet';
import SwitchBar from './components/SwitchBar';
import Display from './components/Display';
import { ethers } from 'ethers';
import { ChainId, Fetcher, ETHER, Route } from '@uniswap/sdk';

import './App.css';

function App() {
	const chainId = ChainId.KOVAN;
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const PAL_UNI_TOKEN_ADDRESS_LIST = '0x961692fb4Ca983A116a6432E2b82972094c71cf2';
	const PAL_UNI_POOL_ADDRESS_LIST = '0xB1265A6B2C5d43Ff358A847DF64fD825b7ed70e0';
	
	const init = async () => {
		const palUni = await Fetcher.fetchTokenData(chainId, PAL_UNI_TOKEN_ADDRESS_LIST);
		const eth = ETHER[chainId];
		const pair = await Fetcher.fetchPairData(palUni, eth);
		const route = new Route([pair], ETHER);
		console.log(route.midPrice.toSignificant(6));
		console.log(route.midPrice.invert().toSignificant(6));
	}

	const uniBalance = async () => await provider.getBalance(PAL_UNI_TOKEN_ADDRESS_LIST).then((balance) => {
    let etherString = ethers.utils.formatEther(balance);
		return etherString;
	});

  const [view, setView] = useState(true);
  const [connected, setConnected] = useState(false);

  const changeView = () => {
    setView(!view);
  }
  
  const changeConnected = () => {
    setConnected(!connected);
  }

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connectionButtonText, setConnectionButtonText] = useState('Connect Wallet');

	const connectWalletHandler = () => {
		if (window.ethereum) {
			window.ethereum.request({ method: 'eth_requestAccounts' })
			.then(result => {
        changeConnected();
				accountChangedHandler(result[0]);
				setConnectionButtonText(result[0].substr(0,6) + '...' + result[0].substr(result[0].length - 4));
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});
		} else {
			console.log('Need to connect a digital wallet');
			setErrorMessage('Please connect a digital wallet such as MetaMask, using the browser extension');
		}
	}

	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	window.ethereum.on('accountsChanged', accountChangedHandler);

  return (
    <div className="App">
      <Wallet defaultAccount={defaultAccount} connectWalletHandler={connectWalletHandler} connectionButtonText={connectionButtonText} userBalance={userBalance} errorMessage={errorMessage} />
      <SwitchBar view={view} onViewChangeClick={changeView} />
      <Display view={view} connected={connected} balance={uniBalance} connectWalletHandler={connectWalletHandler} />
    </div>
  );
}

export default App;
