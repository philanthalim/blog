import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Axios from "axios";

const ViewBlog = () => {
  const [blog, setBlog] = useState([]);

  const { id } = useParams();
  const getPost = () => {
    Axios.get(`https://blogzspot.herokuapp.com/api/blogs/${id}`).then((resp) =>
      setBlog(resp.data)
    );
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div
      style={{
        backgroundColor: "null",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="view-blog-div">
        <h2 style={{ fontSize: "2rem" }}>{blog.title}</h2>
        <p>{blog.dateCreated}</p>
        <img src={blog.image} alt=""></img>
        <p>{blog.story}</p>
      </div>
    </div>
  );
};

export default ViewBlog;
