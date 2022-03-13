import React, { useContext, useRef } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

import { axiosInstance } from "../../config";
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        ></input>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <Link className="link" to="/register/">
        <button className="registerButton">Register</button>
      </Link>
    </div>
  );
};

export default Login;
