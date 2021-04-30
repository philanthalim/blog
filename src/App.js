import "./App.css";
import About from "./components/About";
import CreateBlog from "./components/CreateBlog";
import NavBar from "./components/NavBar";
import ShowBlogs from "./components/ShowBlogs";
import ViewBlog from "./components/ViewBlog";
import EditBlog from "./components/EditBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/NavBar.css";
import "./styles/Blog.css";
import "./styles/ShowBlogs.css";
import "./styles/ViewBlog.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/blogs">
              <ShowBlogs />
            </Route>
            <Route exact path="/new-blog">
              <CreateBlog />
            </Route>
            <Route component={ViewBlog} exact path="/view-blog/:id"></Route>
            <Route component={EditBlog} exact path="/edit-blog/:id"></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
