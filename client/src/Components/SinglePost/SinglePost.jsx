
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./SinglePost.css";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import axiosInstance from "../../config"
const SinglePost = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const [singlePost, setSinglePost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);
  const PF = "https://blogapp-fitness.herokuapp.com/images/";
  useEffect(() => {
    const fetchSinglePost = async () => {
      const res = await axiosInstance.get(`/posts/${pathId}`);

      setSinglePost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchSinglePost();
  }, [pathId]);

  const handleDelete = async () => {
    try {
      const res = await axiosInstance.delete(`/posts/${singlePost._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      const res = await axiosInstance.put(`/posts/${singlePost._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.replace("/");
    } catch (error) {}
  };

  return (
    <div className="singlepost">
      <div className="singlepost-container">
        {singlePost.photo ? (
          <img src={PF + singlePost.photo} alt="" className="singlepostImg" />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            alt=""
            className="singlepostImg"
          />
        )}
        {update ? (
          <input
            type="text"
            className="writeInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlepostTitle">
            {singlePost.title}

            {singlePost.username === user?.username && (
              <div className="singlepostEdit">
                <i className="singlepostIcons">
                  <FaEdit onClick={() => setUpdate(true)} />
                </i>
                <i className="singlepostIcons">
                  <FaTrash onClick={handleDelete} />
                </i>
              </div>
            )}
          </h1>
        )}

        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            Author :{" "}
            <Link className="link" to={`/?user=${singlePost.username}`}>
              <b>{singlePost.username}</b>
            </Link>
          </span>
          <span className="singlepostDate">
            {new Date(singlePost.createdAt).toDateString()}
          </span>
        </div>
        {update ? (
          <textarea
            type="text"
            className="writeInput"
            value={desc}
            placeholder="Update your blog"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p className="singlepostDesc">{singlePost.desc}</p>
        )}
        {update && (
          <button onClick={handleUpdate} className="writeSubmit">
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
