import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";

const ShowBlogs = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/read").then((resp) =>
      setBlogList(resp.data)
    );
  });

  const deletePost = (id) => {
    Axios.delete(`http://localhost:5000/delete/${id}`);
    let newBlogList = blogList.filter((blog) => blog._id !== id);
    setBlogList(newBlogList);
  };
  //console.log(blogList, "list");
  return (
    <div>
      <div style={{ backgroundColor: "#eed7c5", color: "#ac5c17",width:'100%'}}>
        <h2 style={{ padding: "1rem" }}>BLOGPOSTS</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#dda15e",
          padding:'1rem'
        }}
      >
        {blogList.map((blog) => (
          <div className="list-blog-div">
            <div className="left-blog-div">
              <h3 style={{fontSize:'1.5rem'}}>{blog.title}</h3>
              <p style={{ overflow: "hidden", textOverflow: "ellipsis",fontSize:'1.2rem' }}>
                {blog.story}
              </p>
              <p style={{fontSize:'0.9rem'}}>{blog.dateCreated.slice(0,15)}</p>
              <button
                className="delete-btn"
                onClick={() => deletePost(blog._id)}
              >
                Delete
              </button>
            </div>
            <div className="image-div">
              <img className="blog-image" src={blog.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBlogs;
