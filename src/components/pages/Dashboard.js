import React, { useEffect, useState } from "react";
import { useAccount } from 'wagmi'
import "./styles/mainstyle.css"
import abstractedABI from "../../abi/abstracted_abi.json"
import { useNetwork, useContractWrite,usePrepareContractWrite, useContractRead } from 'wagmi';
import { useBalance } from 'wagmi'


function Dashboard() {
  const { address : userAddress, isConnecting, isDisconnected } = useAccount();
  const { data: balance } = useBalance({
    address: userAddress,
  })

  useEffect(() => {
    
  }, [userAddress, isConnecting, isDisconnected]);

    // WRITE CONTRACT
    
    // // Prepare contract for minting
    // const { config : configMinting } = usePrepareContractWrite({
    //     address: proxyAddress, 
    //     abi: webtekABI,
    //     functionName: 'safeMint',
    //     args: [receiver, uri, filename, version, checksum],
    // })
    // const {data, isLoading, isSuccess, write: mintWrite}  = useContractWrite(configMinting)

  return (
    <div className="mainstyle-container">
      
      <h1>Dashboard</h1>
      {isConnecting && <p>Connecting...</p>}
      {isDisconnected && <p>⚠️ You're not connected</p>}
      {!isConnecting && !isDisconnected && (
        <>
        <div className="mainstyle-card">
          <p>🎉 Welcome back <b>{userAddress}</b> 🎉</p>
          <p>Your balance is:<b> {(Number(balance.value)/(10**balance.decimals)).toFixed(3)} ETH</b></p>
          <p>Here you can manage your abstracted account permissions</p>
        </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
