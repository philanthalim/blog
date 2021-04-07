import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Createblog = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const submitBlog = () => {
    setStory("");
    setTitle("");
    Axios.post("http://localhost:5000/insert", { title: title, story: story });
  };
  return (
    <div className="App">
      <div
        style={{ color: "brown", padding: "20px", backgroundColor: "#e7bc91" }}
      >
        <h1>Create a Blog Post</h1>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#eed7c5",
          justifyContent: "center",
        }}
      >
        <div className="form-container">
          <p>TITLE</p>
          <input
            value={title}
            className="title-input"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <p>DESCRIPTION</p>
          <textarea
            placeholder={"Enter details"}
            value={story}
            className="story-input"
            onChange={(e) => setStory(e.target.value)}
          ></textarea>
          <Link to="/blogs">
            <button className="post-button" onClick={submitBlog}>
              Create
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Createblog;
