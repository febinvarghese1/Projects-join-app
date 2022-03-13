
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./Register.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const response = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
      response.data && window.location.replace("/login")
    } catch (error) {
      setError(true)
    }
  };

  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="RegisterForm" onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username..."
        ></input>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button className="RegisterButton" type="submit">
          Register
        </button>
      </form>
      {error?<div className="error-container"><h1 className="error-text">The User is already Exist</h1></div>:<></>}
      <Link className="link" to="/login/">
        <button className="loginRegisterButton">login</button>
      </Link>
    </div>
  );
};

export default Login;
