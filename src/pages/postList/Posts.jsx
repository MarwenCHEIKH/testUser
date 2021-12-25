import "./posts.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Posts() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([[]]);
  const id = window.location.href.split("/")[4][0];
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
        const user = await response.json();
        setUser(user);
      }
      catch(err) {
        console.log(err);
      }
    }
    (async () => await fetchUsers())();
});

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId="+id);
      const posts = await response.json();
      setPosts(posts);
    }
    catch(err) {
      console.log(err);
    }
  }
  (async () => await fetchPosts())();
},[]);



  return (
    <div className="postContainer">
          <div className="productForm">
                  <h1 >{user.username}</h1>
                  <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>Username</td>
            <td>Post title</td>
            <td>Post body</td>
            <td>Action</td>
          </tr>
          {
            posts.map((item, i) =>
              <tr key={i}>
                <td>{user.name}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <Link to={"/comments/"+item.id}>
                      <button className="userListEdit">See comments</button>
                  </Link>
                </td>

              </tr>
            )
          }
        </tbody>
      </table>
          </div>
    </div>
  );
}
