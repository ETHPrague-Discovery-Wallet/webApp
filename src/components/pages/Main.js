import React, { useEffect, useState } from "react";
import "./styles/mainstyle.css"
function Main() {

  return (
    <div className="mainstyle-container">
      <h1>🌈 Discovery Wallet</h1>
      <div className="mainstyle-card">
        <p>The Discovery Account project aims to provide a secure solution for guiding new blockchain users through their first DeFi transactions by adding an onChain layer to their wallet.
        <br></br> This solution aims to not only protect users from scams and mishandling but also to offer them services as close as possible to those offered by centralized exchanges.
        </p>
      </div>
      <h2>📚 Abstract</h2>
      <div className="mainstyle-card">
        <p>
        Decentralized Finance (DeFi) has revolutionized the financial sector by offering lending, borrowing, trading, and other financial services without traditional intermediaries. 
        <br></br>However, many novice users face challenges when trying to enter the DeFi ecosystem due to security concerns, technical complexity, and lack of accessibility. 
        <br></br>With this project we aim to address these issues by providing a user-friendly and secure solution for novice users looking to explore the world of decentralized finance.
        </p>
      </div>
    </div>
  );
}

export default Main;
