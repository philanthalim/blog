import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Createblog = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [image,setImage]=useState("https://images.pexels.com/photos/3910065/pexels-photo-3910065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")

  const handleImage = (e) => {
    const file=e.target.files[0]
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>{
      setImage(reader.result)
      
    }
    reader.onerror=()=>{
      console.log('err')
    }
  };

  const submitBlog = () => {
    Axios.post("https://blogzspot.herokuapp.com/api/blogs", {
      title: title,
      story: story,
      image: image,
    });
  };
  return (
    <div className="App">
      <div style={{ color: "null", padding: "20px", backgroundColor: "null" }}>
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
          <input
          style={{marginTop:'20px',marginBottom:'20px'}}
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
      <div style={{ height: "60vh", backgroundColor: "null" }}></div>
    </div>
  );
};

export default Createblog;
