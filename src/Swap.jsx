import { useEffect, useState } from 'react';
import { providers, ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { SwapWidget } from '@uniswap/widgets';
import Navbar from './components/Navbar';

const JsonRpcEndpoint = `https://mainnet.infura.io/v3/fa9d5dbaaaa741c2b3f37a1b2953c496`;
const JsonRpcProvider = new providers.JsonRpcProvider(JsonRpcEndpoint);
const provider = new ethers.providers.Web3Provider(JsonRpcProvider);

function Swap() {

  const [account, setAccount] = useState({
    address: '',
    provider: provider
  });

  const [connected, setConnected] = useState(false);

  useEffect(async () => {
    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      const address = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      setAccount({
        address: address[0],
        provider: ethereumProvider
      });

      setConnected(true)
    }
  }, [])

  async function connectWallet() {
    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      const address = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      setAccount({
        address: address[0],
        provider: ethereumProvider
      });

      setConnected(true)
    }
  }

  const theme = {
    primary: '#fff',
    secondary: '#fff',
    interactive: '#fff',
    container: '#000',
    module: '#000',
    accent: '#1AE050',
    outline: '#fff',
    dialog: '#000',
    fontFamily: 'Manrope',
    borderRadius: 20
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
        <div className='container'>
          <a className="navbar-brand" href="/"><img src={require('./Img/logo.png')} style={{ "width": "80px" }} alt="" /></a>
          <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

            </ul>
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Docs <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://t.me/MMakerMarkets">Community</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/swap">Swap</a>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/trade">Launch App</a>
                </li>
                <li className="nav-item">
                  <a className='nav-link btn hero-btn' onClick={connectWallet} style={{ color: "#fff", padding: "0.4em 0.5em" }}>{connected ? 'Wallet Connected' : 'Connect Wallet'}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="Uniswap">
        <div style={{ marginTop: "50px" }}>
          <div className='section-heading swap-heading' style={{ "margin-bottom": "20px" }}><span className='section-highlight'>MMM</span> SWAP</div>
          <p className='text-center swap-paragraph mx-auto'>Seamless, secure asset exchanges. Connect your wallet and elevate your trading experience.</p>
          <div className='d-flex align-items-center justify-content-center mt-5'>
            <div>
              <iframe id="dextswap-aggregator-widget"
                title="DEXTswap Aggregator"
                width="400"
                height="420" style={{ border: "unset" }} src="https://www.dextools.io/widget-aggregator/en/swap/eth/0xfb7b4564402e5500db5bb6d63ae671302777c75a"></iframe>
            </div>
          </div>
        </div>
        <img src={require(`./Img/home/hero-bottom.png`)} className='mt-5' style={{ "width": "100%" }} alt="" />
      </div>
    </div>
  );
}

export default Swap;
