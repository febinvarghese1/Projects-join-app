import React from "react";
import SideBar from "../../Components/SiderBar/SideBar";
import SinglePost from "../../Components/SinglePost/SinglePost";
import "./SinglePage.css";
const SinglePage = () => {
  return (
    <div className="single-page">
      <SinglePost />
       <SideBar />
    </div>
  );
};

export default SinglePage;
