import React, { useEffect } from "react";
import { useAccount } from 'wagmi'
import "./styles/mainstyle.css"
import abstractedABI from "../../abi/abstracted_abi.json"
import { useNetwork, useContractRead } from 'wagmi';
import { useBalance } from 'wagmi'
import contractsData from "./contractsData.json";

function Dashboard() {

  const factoryAddress = "0x"
  const discoveryAccount = "0x"

  const { address: userAddress, isConnecting, isDisconnected } = useAccount();
  const { data: balance } = useBalance({
    address: userAddress,
  })

  useEffect(() => {
    
  }, [userAddress, isConnecting, isDisconnected]);

  // READ CONTRACT
  const { data: authorizedAddress } = useContractRead({
    address: factoryAddress,
    abi: abstractedABI,
    functionName: 'getAllAuthorizedAddress',
  })

  function getAddressName(address) {
    for (const key in contractsData) {
      if (contractsData.hasOwnProperty(key) && contractsData[key].op === address) {
        return key;
      }
    }
    return "Unknown";
  }

  return (
    <div className="mainstyle-container">
      <h1>Dashboard</h1>
      {isConnecting && <p>Connecting...</p>}
      {isDisconnected && <p>⚠️ You're not connected</p>}
      {!isConnecting && !isDisconnected && (
        <>
          <div className="mainstyle-card">
            <p>🎉 Welcome back <b>{userAddress}</b> 🎉</p>
            <p>Your balance is: <b>{(Number(balance.value) / (10 ** balance.decimals)).toFixed(3)} ETH</b></p>
            <p>Here you can manage your abstracted account permissions</p>
          </div>
          <div className="mainstyle-card">
            <h2>Authorized Addresses</h2>
            {authorizedAddress && authorizedAddress.length > 0 ? (
              <ul>
                {authorizedAddress.map((address, index) => (
                  <li key={index}>
                    {getAddressName(address)} ({address})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No authorized addresses found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
