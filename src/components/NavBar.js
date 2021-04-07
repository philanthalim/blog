import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="left-side">
        <Link style={{ textDecoration: "none",color:'#d68c45',fontSize:'2rem' }} to="/">
          <p>tumble</p>
        </Link>
      </div>
      <div className="right-side">
        <div className="nav-link-div">
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            to="/blogs"
          >
            <p className="nav-link">Blogs</p>
          </Link>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            to="/new-blog"
          >
            <p className="nav-link">Create</p>
          </Link>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            to="/blogs"
          >
            <p className="nav-link">Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
