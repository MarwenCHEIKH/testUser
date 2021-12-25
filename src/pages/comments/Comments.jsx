import "./comments.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Posts() {
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
    <div className="postContainer">
          <div className="productForm">
                  <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>body</td>
          </tr>
          {
            comments.map((item, i) =>
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
            )
          }
        </tbody>
      </table>
          </div>
    </div>
  );
}
