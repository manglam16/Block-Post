import React, { useState } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <Stack sx={{ mx: "auto", width: "75%" }} padding={3}>
      <TextField label="Title" variant="outlined" margin="normal" />
      <TextField label="Author" variant="outlined" margin="normal" />
      <TextField
        label="Content"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Stack>
  );
}

export default CreatePost;

// {
//   "title" : "title",
//   "author" : "author",
//   "content" : "content",
// }
