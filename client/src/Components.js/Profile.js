import React, { useState } from "react";
import { ethers } from "ethers";
import { Button, Box, Typography } from "@mui/material";

const Profile = () => {
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [status, setStatus] = useState(false);

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
    setStatus(true);
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
      <Box sx={{ mx: "auto", width: "75%" }} padding={3}>
        <Button onClick={connectWallet} variant="contained">
          Connect wallet
        </Button>
        <Typography variant="h5"> Connection Status </Typography>
        <Typography variant="h6">
          {status ? "Connected" : "Not Connected : Click Button To Connect"}
        </Typography>
        <Typography variant="h6">User Account is {defaultAccount}</Typography>
        <Typography variant="h6">User Balance is {userBalance}</Typography>
      </Box>
    </>
  );
};

export default Profile;
