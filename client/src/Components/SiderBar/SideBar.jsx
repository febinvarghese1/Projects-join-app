import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./SideBar.css";
const SideBar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axiosInstance.get("/categories");
      setCategory(response.data);
    };
    getCategory();
  }, []);
  
  return (
    <div className="sidebar ">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          id="sidebarImage"
          src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <p>
          Welcome to my Blog.......
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {category?.map((c) => (
            <li className="sidebarListItem">
              <Link className="link" to={`/?cat=${c.name}`}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcons">
            <FaInstagram />
          </i>
          <i className="sidebarIcons">
            <FaFacebook />
          </i>
          <i className="sidebarIcons">
            <FaTwitter />
          </i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
