import { Typography } from "@mui/material";
import { Box, Button, Card, CardContent } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Post from "./Post";
const LandingPage = () => {
  return (
    <>
      <Box sx={{ mx: "auto", width: "75%" }}>
        <Stack padding={2}>
          <NavLink to="/create-post">
            <Button variant="contained">Create New Post</Button>
          </NavLink>
        </Stack>
        <hr></hr>
        <Typography variant="h4"> Other User's Posts </Typography>
        <Post title="1" author="" content="" />
        <Post title="2" author="" content="" />
        <Post title="3" author="" content="" />
      </Box>
    </>
  );
};

export default LandingPage;
