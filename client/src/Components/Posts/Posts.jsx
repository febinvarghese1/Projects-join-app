import React from "react";
import Post from "../Post/Post";
import "./Posts.css";



const Posts = ({posts}) => {
  return (
    <div className="posts">
      {posts.map((item) => (
        <div key={item._id} className="posts-wrapper">
          <Post props={item}  />
        </div>
      ))}
    </div>
  );
};

export default Posts;
