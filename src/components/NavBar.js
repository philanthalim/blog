import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="nav-link-div">
          <NavLink
            className="nav-link"
            exact
            activeStyle={{ fontWeight: "bold", color: "black" }}
            to="/"
          >
            Me
          </NavLink>
          <NavLink className="nav-link"
            exact 
            activeStyle={{ fontWeight: "bold", color: "black" }}
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink className="nav-link"
            exact
            activeStyle={{ fontWeight: "bold", color: "black" }}
            to="/new-blog"
          >
           Create
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
