import React, { useEffect, useState } from "react";
import "./styles/mainstyle.css"
function Main() {

  return (
    <div className="mainstyle-container">
      <h1>🌈 Discovery Wallet</h1>
      <div className="mainstyle-card">
        <p>Discovery Wallet is an ambitious project aimed at providing users with a user-friendly and secure solution to initiate their first DeFi transactions. The wallet will be built on Web3 Blockchain technology, offering enhanced security, increased privacy, and an optimal user experience.
        <br></br><br></br>📚By integrating ETH as the base fund, providing access to Aave for DeFi lending and borrowing, and utilizing Optimism's scaling solution, our wallet aims to make the DeFi experience more accessible and secure for all users with the use of the account abstraction (ERC-4337).</p>
      </div>
    </div>
  );
}

export default Main;
