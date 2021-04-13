import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const EditBlog = () => {
  const [blog, setBlog] = useState([]);
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const { id } = useParams();
  const getPost = async () => {
    await Axios.get(`https://blogzspot.herokuapp.com/api/blogs/${id}`).then((resp) =>
      updateDetails(resp)
    );
  };
  const updateDetails = (resp) => {
    setBlog(resp.data);
    setTitle(resp.data.title);
    setStory(resp.data.story);
  };
  const updatePost = async () => {
    await Axios.put(`https://blogzspot.herokuapp.com/api/blogs/${id}`, {
      newTitle: title,
      newStory: story,
    });
  };

  useEffect(() => {
    getPost();
  },[] );

  return (
    <div className="App">
      <div
        style={{  padding: "20px"}}
      >
        <h1>Edit Post</h1>
      </div>
      <div
        style={{
          display: "flex",
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
            <button onClick={updatePost} className="post-button">
              Update
            </button>
          </Link>
        </div>
        <div style={{ height: "90vh" }}></div>
      </div>
    </div>
  );
};

export default EditBlog;
