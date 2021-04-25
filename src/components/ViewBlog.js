import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";
import Footer from "./Footer";

const ViewBlog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const updateState = (resp) => {
    setBlog(resp.data);
    setLoading(false);
  };

  const getPost = () => {
    Axios.get(`https://blogzspot.herokuapp.com/api/blogs/${id}`).then((resp) =>
      updateState(resp)
    );
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader type="Bars" color="purple" height={40} width={40} />
      ) : (
        <></>
      )}
      <div className="view-blog-div">
        <h2 style={{ fontSize: "1.6rem" }}>{blog.title}</h2>
        {blog.dateCreated ? <p>{blog.dateCreated.slice(0, 15)}</p> : <></>}
        <img className="view-blog-image" src={blog.image} alt=""></img>
        <p className="story-style">{blog.story}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ViewBlog;
