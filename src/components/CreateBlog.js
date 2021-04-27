import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Resizer from "react-image-file-resizer";
//import { addPost } from "../redux/actions/index";
//import { useDispatch } from "react-redux";
import Footer from "./Footer";

const Createblog = () => {
  //const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState(
    "https://images.pexels.com/photos/3910065/pexels-photo-3910065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );

  const handleImage = (e) => {
    const file = e.target.files[0];
    resize(file);
  };
  const resize = (image1) => {
    Resizer.imageFileResizer(
      image1,
      380,
      380,
      "JPEG",
      100,
      0,
      (uri) => {
        setImage(uri);
      },
      "base64"
    );
  };

  const submitBlog = () => {
    Axios.post("https://blogzspot.herokuapp.com/api/blogs", {
      title: title,
      story: story,
      image: image,
    });
   // dispatch(addPost({ title: title, story: story, image: image }));
  };
  return (
    <div className="App">
      <div
        style={{
          fontFamily: "Open Sans",
          color: "null",
          padding: "20px",
          backgroundColor: "null",
        }}
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
            style={{ height: "9rem", fontSize: "1.2rem" }}
            placeholder={"Enter details"}
            value={story}
            className="story-input"
            onChange={(e) => setStory(e.target.value)}
          ></textarea>
          <input
            style={{ marginTop: "20px", marginBottom: "20px" }}
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => handleImage(e)}
          ></input>
          <Link to="/blogs">
            <button className="post-button" onClick={submitBlog}>
              Create
            </button>
          </Link>
        </div>
      </div>
      <div style={{ height: "30vh", backgroundColor: "null" }}></div>
      <Footer />
    </div>
  );
};

export default Createblog;
