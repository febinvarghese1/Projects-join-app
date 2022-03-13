import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
const Post = ({ props }) => {
  const PF = "https://blogapp-fitness.herokuapp.com/images/";
  return (
    <div className="post">
      {props.photo ? (
        <img src={PF+props.photo} className="postImg" alt="" />
      ) : (
        <img
          src="https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
          className="postImg"
          alt=""
        />
      )}
      <div className="postInfo">
        <div className="postCategories">
          {props.categories.map((cat) => (
            <span key={cat} className="postCategory">
              {cat}
            </span>
          ))}
        </div>
        <Link className="link" to={`/post/${props._id}`}>
          <span className="postTitle">{props.title}</span>
        </Link>
        <hr />
        <span className="postDates">
          {new Date(props.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{props.desc}</p>
    </div>
  );
};

export default Post;
  