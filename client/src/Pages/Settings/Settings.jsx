import React, { useContext } from "react";
import "./Settings.css";
import SideBar from "../../Components/SiderBar/SideBar";
import {FaUserCircle} from "react-icons/fa"
import { Context } from "../../Context/Context";
const Settings = () => {
  const {user} = useContext(Context);

  return (
    <div className="settings">
      <div className="settingsContainer">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form className="settingsForm">
          <label>profile picture</label>
          <div className="settingsProfilePic">
            <img
              src="https://images.unsplash.com/photo-1516298252535-cf2ac5147f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
              alt=""
            />
            <label htmlFor="fileInput">
                <i className="settingsProfileIcon"><FaUserCircle /></i></label>
          <input type="file" id="fileInput"/>
          </div>
            <label> Username</label>
            <input type="text" placeholder={`${user.username}`}/>
            <label> Email</label>
            <input type="email" placeholder={`${user.email}`}/>
            <label> Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
