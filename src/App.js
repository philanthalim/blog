import "./App.css";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import NavBar from "./components/NavBar";
import ShowBlogs from "./components/ShowBlogs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/NavBar.css";
import "./styles/Blog.css";
import "./styles/ShowBlogs.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/blogs">
              <ShowBlogs />
            </Route>
            <Route exact path="/new-blog">
              <CreateBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
