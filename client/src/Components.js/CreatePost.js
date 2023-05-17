import React, { useState } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";
import Web3 from "web3"; // Import Web3.js library

// Contract ABI and address
const contractABI = ""; // Replace with the ABI of your Solidity contract
const contractAddress = "0x..."; // Replace with the address of your deployed contract

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Connect to the Ethereum network using Web3
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(window.ethereum);

      try {
        // Get the contract instance
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Send the post data to the contract
        await contract.methods
          .createPost(title, content, author)
          .send({ from: web3.eth.defaultAccount });

        // Clear the form fields
        setTitle("");
        setContent("");
        setAuthor("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Stack sx={{ mx: "auto", width: "75%" }} padding={3}>
      <TextField
        label="Title"
        variant="outlined"
        margin="normal"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        label="Author"
        variant="outlined"
        margin="normal"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      />
      <TextField
        label="Content"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
}

export default CreatePost;
