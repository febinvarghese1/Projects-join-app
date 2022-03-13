import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import { SiderBardata } from "./SideBarData";
import "./NavBar.css";



const NavBar = () => {
  const { user, dispatch } = useContext(Context);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  
  const logoutHandler = (e) => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navLeft">
        <h1 className="navbar-logo">Fit Forward</h1>
      </div>
      <div className="navCenter">
        <div className="menu-item">
         
          {!toggleSidebar && <i
            className="menu-icon"
            onClick={() => setToggleSidebar((prevState) => !prevState)}
          >
            <FcMenu />
          </i>}
          {toggleSidebar && (
            <i
              className="menu-icon"
              onClick={() => setToggleSidebar((prevState) => !prevState)}
            >
              <ImCross />
            </i>
          )}
          <div className="Toggle-Menu">
            {toggleSidebar &&
              SiderBardata.map((item) => (
                <li key={item.title} className="toggle-sidebar">
                  {item.title === "LOGOUT" ? (
                    <Link
                      className="link"
                      onClick={logoutHandler}
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <Link className="link" to={item.path}>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
          </div>
        </div>
        <div className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="write/">
              WRITE
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="navListItem" onClick={logoutHandler}>
            <Link className="link" to="/">
              {user && "LOGOUT"}
            </Link>
          </li>
        </div>
      </div>
      <div className="navRight">
        {user ? (
          <Link to="settings/">
            <img
              id="profileImage"
              src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_1280.png"
              alt=""
            />
          </Link>
        ) : (
          <>
            <Link
              className="link"
              style={{ marginRight: "30px" }}
              to="register/"
            >
              REGISTER
            </Link>
            <Link className="link" to="login/">
              LOGIN
            </Link>
          </>
        )}

        <i className="navbar-search">
          <FaSearch />
        </i>
      </div>
    </div>
  );
};

export default NavBar;
