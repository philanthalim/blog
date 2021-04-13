import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowBlogs = () => {
  const [blogList, setBlogList] = useState([]);

  const fetchBlogs = () => {
    Axios.get("https://blogzspot.herokuapp.com/api/blogs").then((resp) =>
      setBlogList(resp.data)
    );
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deletePost = (id) => {
    Axios.delete(`https://blogzspot.herokuapp.com/api/blogs/${id}`);
    let newBlogList = blogList.filter((blog) => blog._id !== id);
    setBlogList(newBlogList);
  };

  return (
    <div>
      <div
        style={{ backgroundColor: "null", color: "black", width: "100%" }}
      >
        <h2 style={{ padding: "1rem" }}>BLOG POSTS</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "null",
          padding: "1rem",
        }}
      >
        {blogList.map((blog) => (
          <div className="list-blog-div">
            <div className="image-div">
              <img className="blog-image" src={blog.image} alt="" />
            </div>
            <div className="right-blog-div">
              <Link
                style={{ textDecoration: "none", color: "#7400b8" }}
                to={`/view-blog/${blog._id}`}
              >
                <h3 style={{ fontSize: "1.5rem" }}>{blog.title}</h3>
              </Link>
              <p
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "1.2rem",
                }}
              >
                {blog.story}...
              </p>
              <p style={{ fontSize: "0.9rem" }}>
                {blog.dateCreated.slice(0, 15)}
              </p>
              <div>
                {" "}
                <button
                  className="delete-btn"
                  onClick={() => deletePost(blog._id)}
                >
                  Delete
                </button>
                <a href={`/edit-blog/${blog._id}`}>
                  <button className="delete-btn"> Edit </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBlogs;
