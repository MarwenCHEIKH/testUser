import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import EditUser from "./pages/editUser/EditUser";
import Posts from "./pages/postList/Posts";
import Comments from "./pages/comments/Comments";
import UserPosts from "./pages/userPosts/UserPosts";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <EditUser />
          </Route>
          <Route path="/userPosts">
            <UserPosts />
          </Route>
          <Route path="/post/:postId">
            <Posts />
          </Route>
          <Route path="/comments/:commentId">
            <Comments/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
