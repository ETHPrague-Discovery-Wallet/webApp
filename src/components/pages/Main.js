import React, { useEffect, useState } from "react";
import "./styles/mainstyle.css"
function Main() {

  return (
    <div className="mainstyle-container">
      <h1>🌈 Discovery Account</h1>
      <div className="mainstyle-card">
        <p>Discovery Account, an elegant Chrome extension built on the foundation of Trampoline, empowering users to effortlessly create and manage their own Discovery Account.
        <br></br> 
This    Abstracted Account is meticulously crafted with the sole purpose of safeguarding users against scams and efficiently handling errors
        </p>
      </div>
      <h2>📚 Abstract</h2>
      <div className="mainstyle-card">
        <p>
        The growing interest of populations for blockchain solutions is pushing new users every day to make their first transactions on attractive networks such as optimistic rollups. However, embarking on this adventure is not without its dangers. Thousands of scams watch for the slightest of our errors to strip all of our tokens.
        <br></br>It is to fight against this that Discovery Account was born. Based on the account abstraction (EIP-4337), it allows everyone to equip themselves with a new shield against fraud thanks to various defense mechanisms such as transaction analysis and a protection against the compromise of private keys. 
        <br></br>We aim to solve these issues by providing a user-friendly and secure solution for novice and advanced users looking to explore the world of decentralized finance.
        </p>
      </div>
    </div>
  );
}

export default Main;
