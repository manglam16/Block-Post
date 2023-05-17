import React from "react";
import { Button, Card, Typography, CardContent, Stack } from "@mui/material";
const Post = (props) => {
  return (
    <>
      <Card variant="outlined" sx={{ margin: "10px" }}>
        <Stack direction="row" spacing={2}>
          <CardContent>
            <Typography variant="h6" marginRight="10vh">
              {props.title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="subtitle1" marginRight="10vh">
              {props.author}
            </Typography>
          </CardContent>
        </Stack>

        <CardContent>
          <Typography variant="body1">{props.content}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Post;
