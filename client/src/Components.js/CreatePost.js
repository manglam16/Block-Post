import React, { useState } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";
import Web3 from "web3";

const contractABI = "";
const contractAddress = "0x...";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(window.ethereum);

      try {
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        await contract.methods
          .createPost(title, content, author)
          .send({ from: web3.eth.defaultAccount });

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
