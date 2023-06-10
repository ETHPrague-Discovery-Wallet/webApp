import React, { useEffect, useState } from "react";
import { useAccount } from 'wagmi'
import "./styles/mainstyle.css"
import abstractedABI from "../../abi/abstracted_abi.json"
import factoryABI from "../../abi/factory_abi.json"
import { useNetwork, useContractWrite,usePrepareContractWrite, useContractRead } from 'wagmi';
import { useBalance } from 'wagmi'


function Dashboard() {

  const factoryAddress = "0x"
  const discoveryAccount = "0x"

  const { address : userAddress, isConnecting, isDisconnected } = useAccount();
  const { data: balance } = useBalance({
    address: userAddress,
  })

  useEffect(() => {
    
  }, [userAddress, isConnecting, isDisconnected]);

  // READ CONTRACT
  const { data : hasDeployed } = useContractRead({
    address: factoryAddress,
    abi: factoryABI,
    functionName: 'getDeployment',
    args: [userAddress],
  })

  // WRITE CONTRACT
  
  // // Prepare contract for minting
  // const { config : configMinting } = usePrepareContractWrite({
  //     address: proxyAddress, 
  //     abi: abstractedABI,
  //     functionName: 'safeMint',
  //     args: [receiver, uri, filename, version, checksum],
  // })
  // const {data, isLoading, isSuccess, write: mintWrite}  = useContractWrite(configMinting)
  console.log("hasdeployed: ",hasDeployed);
  
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
        {hasDeployed && (
          <div className="mainstyle-card">
            <p>🎉 You have deployed an abstracted account 🎉</p>
            </div>
            )}
        {!hasDeployed && (
          <div className="mainstyle-card">
            <p>⚠️ You have not deployed an abstracted account ⚠️</p>
          </div>
        )}

        </>
      )}
    </div>
  );
}

export default Dashboard;
