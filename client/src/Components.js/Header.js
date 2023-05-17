import * as React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography, TextField, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ethers } from "ethers";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const Header = () => {
  const [defaultAccount, setDefaultAccount] = useState(null);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChanged([result[0]]);
          window.alert("connection successful");
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
  };

  return (
    <>
      <Box sx={{ minHeight: "6vh", backgroundColor: "#5FC3E4" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding="10px"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            paddingLeft={5}
          >
            <SendIcon></SendIcon>
            <Typography textAlign="left" variant="h4" fontWeight="bold">
              <NavLink to="/">BlockPost</NavLink>
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            paddingRight={5}
          >
            <Button
              variant="contained"
              onClick={connectWallet}
              sx={{
                color: "#FFFF",
                backgroundColor: "#5FC3E4",
              }}
            >
              <NavLink to="/profile">
                {" "}
                {defaultAccount
                  ? String(defaultAccount).substring(0, 9)
                  : "connect to wallet"}{" "}
                ...
              </NavLink>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
