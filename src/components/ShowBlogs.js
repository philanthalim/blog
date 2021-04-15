import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/index";

const ShowBlogs = () => {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  //const blogList = useSelector((state) => state);
  const dispatch = useDispatch();
  //console.log(blogList, "list");

  const updateState = (resp) => {
    //dispatch(getPosts(resp.data));
    setBlogList(resp.data);
    setLoading(false);
  };

  const fetchBlogs = async () => {
    await Axios.get("https://blogzspot.herokuapp.com/api/blogs").then((resp) =>
      updateState(resp)
    );
  };

  useEffect(() => {
    fetchBlogs();
    console.log("on page");
    const timer = setTimeout(() => fetchBlogs(), 1000);//mimic real time data
    return () => clearTimeout(timer); 
  }, []);

  const deletePost = (id) => {
    Axios.delete(`https://blogzspot.herokuapp.com/api/blogs/${id}`);
    let newBlogList = blogList.filter((blog) => blog._id !== id);
    setBlogList(newBlogList);
  };

  //console.log(blogList);
  return (
    <div>
      <div style={{ backgroundColor: "null", color: "black", width: "100%" }}>
        <h1 className="header-text">BLOG POSTS</h1>
      </div>
      {loading ? (
        <Loader type="Bars" color="purple" height={40} width={40} />
      ) : (
        <></>
      )}
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
                <h3 style={{ fontSize: "1.1rem" }}>{blog.title}</h3>
              </Link>
              {/*     {blog.story.length > 10 ? (
                <p>{blog.story.slice(0, 80)}...</p>
              ) : (
                <p>{blog.story}</p>
              )}          */}

              {blog.dateCreated ? (
                <p style={{ fontSize: "0.85rem" }}>
                  {blog.dateCreated.slice(0, 15)}
                </p>
              ) : (
                <></>
              )}
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
