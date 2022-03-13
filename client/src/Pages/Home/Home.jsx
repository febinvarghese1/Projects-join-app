import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SiderBar/SideBar";
import Posts from "../../Components/Posts/Posts";
import "./Home.css";
import { useLocation } from "react-router";
import Footer from "../Footer/Footer";
import { axiosInstance } from "../../config";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + location.search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [location.search]);

  return (
    <div>
      <div className="header-page">
        <Header />
      </div>
      <div className="home-page">
        <Posts posts={posts} />
        <SideBar />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
