import { Typography } from "@mui/material";
import { Box, Button, Card, CardContent } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Post from "./Post";
import Web3 from "web3";

const contractABI = ""; // Replace with the ABI of your Solidity contract
const contractAddress = "0x..."; // Replace with the address of your deployed contract

const LandingPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Function to fetch blogs from the contract
  const fetchBlogs = async () => {
    // Connect to the Ethereum network using Web3
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(window.ethereum);

      try {
        // Get the contract instance
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Get the total number of blogs
        const totalBlogs = await contract.methods.getTotalBlogs().call();

        // Fetch each blog by index
        const blogList = [];
        for (let i = 0; i < totalBlogs; i++) {
          const blog = await contract.methods.getBlog(i).call();
          blogList.push(blog);
        }

        // Update the state with the fetched blogs
        setBlogs(blogList);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Box sx={{ mx: "auto", width: "75%" }}>
        <Stack padding={2}>
          <NavLink to="/create-post">
            <Button variant="contained">Create New Post</Button>
          </NavLink>
        </Stack>
        <hr></hr>
        <Typography variant="h4"> Recent Posts </Typography>
        <Post
          title="new tweet for this new app"
          author="myself"
          content="new tweet for this new app"
        />
        <Post title="pehla tweet" author="test" content="abba dabba jabba" />
        <Post
          title="modi ji"
          author="0xecF9Fd4AaebEE79dB243Cde28685f3246F42cDDa"
          content="modi ji is our saviour"
        />
        <Post
          title="testing"
          author="new_user"
          content="The sun was setting behind the mountains, casting a golden glow across the tranquil valley. The air was crisp, carrying the scent of blooming wildflowers. Birds chirped melodiously, bidding farewell to another day. As I walked along the winding path, I felt a sense of peace enveloping me."
        />
      </Box>
    </>
  );
};

export default LandingPage;
