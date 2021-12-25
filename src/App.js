import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import EditUser from "./pages/editUser/EditUser";
import Posts from "./pages/postList/Posts";
import Comments from "./pages/comments/Comments";


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
