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
    <div className="view-blog-div">
      <h2 style={{ fontSize: "1.6rem" }}>{blog.title}</h2>
      {blog.dateCreated ? <p>{blog.dateCreated.slice(0, 15)}</p> : <></>}
      <img src={blog.image} alt="" style={{ width: "15rem" }}></img>
      <p style={{ fontSize: "1rem",textAlign:'left' }}>{blog.story}</p>
    </div>
  );
};

export default ViewBlog;
