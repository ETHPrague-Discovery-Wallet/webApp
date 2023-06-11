import React, { useEffect, useState } from "react";
import { useBalance } from 'wagmi'
import { useAccount, useContractWrite, usePrepareContractWrite, useContractRead } from 'wagmi'
import "./styles/mainstyle.css"
import abstractedABI from "../../abi/abstracted_abi.json"
import contractsData from "./contractsData.json";

function Dashboard() {
  const { address: userAddress, isConnecting, isDisconnected } = useAccount();
  const { data: balance } = useBalance({
    address: userAddress,
  });

  const [whitelistContract, setWhitelistContract] = useState([]);
  const [customAddresses, setCustomAddresses] = useState([]);

  useEffect(() => {
    
  }, [userAddress, isConnecting, isDisconnected]);

  // READ CONTRACT
  const { data: authorizedAddress, isLoading, isSuccess, error } = useContractRead({
    address: userAddress,
    abi: abstractedABI,
    functionName: 'getAllAuthorizedAddress',
    args: [],
  });

  function getAddressName(address) {
    const addressString = address.toString();
    for (const key in contractsData) {
      if (contractsData.hasOwnProperty(key) && contractsData[key].op === addressString) {
        return key;
      }
    }
    return "Unknown";
  }
  
  // WRITE CONTRACT
  const { config: prepareConfig } = usePrepareContractWrite({
    address: userAddress,
    abi: abstractedABI,
    functionName: 'initializeAddress',
    args: [whitelistContract, customAddresses],
  });
  const { isLoading: isWriteLoading, isSuccess: isWriteSuccess, error: writeError, write: executeWrite } = useContractWrite(prepareConfig);

  const handleAddContract = (contract) => {
    setWhitelistContract((prevContracts) => [...prevContracts, contract]);
  };

  const handleAddCustomAddress = (address) => {
    setCustomAddresses((prevAddresses) => [...prevAddresses, address]);
  };

  const handleSubmit = () => {
    executeWrite();
  };

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
          <div className="mainstyle-card">
            <h2>Add Contracts</h2>
            <select onChange={(e) => handleAddContract(e.target.value)}>
              <option value="">Select a contract</option>
              {Object.keys(contractsData).map((key) => (
                <option key={key} value={contractsData[key].op}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className="mainstyle-card">
            <h2>Add Custom Addresses</h2>
            <input type="text" placeholder="Enter an address" onChange={(e) => handleAddCustomAddress(e.target.value)} />
          </div>
          <div className="mainstyle-card">
            <button onClick={handleSubmit} disabled={isWriteLoading}>
              Add Addresses
            </button>
            {isWriteLoading && <p>Adding addresses...</p>}
            {isWriteSuccess && <p>Addresses added successfully.</p>}
            {writeError && <p>Error: {writeError}</p>}
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
