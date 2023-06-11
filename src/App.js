import './App.css';
import {BrowserRouter as Router} from "react-router-dom"; 
import Navbar from './utils/Navbar';
import AppRoutes from "./components/Routes.js";
import React from 'react';


// Rainbowkit
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, optimism, sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { scroll } from './scroll.ts'

const { chains, publicClient } = configureChains(
  [mainnet, optimism,scroll, sepolia],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})
 
function App() {
  
  return (
    <div className="App">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Router>
            <Navbar/>
            <AppRoutes />
          </Router>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  )
}

export default App;