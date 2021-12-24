import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import EditUser from "./pages/editUser/EditUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";


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
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;