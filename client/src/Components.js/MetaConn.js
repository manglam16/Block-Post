import React, { useState } from "react";
import { ethers } from "ethers";

const MetaConn = () => {
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChanged([result[0]]);
        })
        .catch((error) => {
          window.alert("User Declined Request In Metamask");
        });
    } else {
      window.alert("install metamask first");
    }
  };

  const accountChanged = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (accountAddress) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [String(accountAddress), "latest"],
      })
      .then((balance) => {
        setUserBalance(ethers.formatEther(balance));
      });
  };

  return (
    <>
      <h1>MetaConn</h1>
      <button onClick={connectWallet}>
        {defaultAccount ? defaultAccount : "connect to wallet"}
      </button>
      <h3>Address {defaultAccount}</h3>
      <h3>Balance {userBalance}</h3>
    </>
  );
};

export default MetaConn;
