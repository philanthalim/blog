import React from "react";
import { useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Createblog = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const submitBlog = () => {
    Axios.post("https://blogzspot.herokuapp.com/api/blogs", {
      title: title,
      story: story,
    });
  };
  return (
    <div className="App">
      <div
        style={{ color: "null", padding: "20px", backgroundColor: "null" }}
      >
        <h1>Create a Blog Post</h1>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "null",
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
      <div style={{ height: "60vh", backgroundColor: "null" }}></div>
    </div>
  );
};

export default Createblog;
