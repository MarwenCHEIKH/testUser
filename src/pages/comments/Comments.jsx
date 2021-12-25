import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";


export default function AlignItemsList() {

  const [comments, setcomments] = useState([]);
  const [post, setPost] = useState([[]]);
  const id = window.location.href.split("/")[4][0];
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
        const post = await response.json();
        setPost(post);
      }
      catch(err) {
        console.log(err);
      }
    }
    (async () => await fetchPost())();
});

useEffect(() => {
  const fetchComments = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId="+id);
      const comments = await response.json();
      setcomments(comments);
    }
    catch(err) {
      console.log(err);
    }
  }
  (async () => await fetchComments())();
},[]);

  return (
    <div className="commentList">
      {
            comments.map((item, i) =>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' , mr: '700px'}}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.email} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                      >
                      {item.email+" :"}
                    </Typography>
                    {item.body}
                  </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
            )
          }
    
          </div>
  );
}
