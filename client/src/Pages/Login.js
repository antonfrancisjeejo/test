import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Hitting");
    const result = await axios.post(
      "http://localhost:5000/user/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          ContentType: "application/json",
        },
      }
    );
    if (result.data._id) {
      window.location.href = "/home";
    } else {
      alert("Wrong password`");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2>Login</h2>
        <form className="login__form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" onClick={submitHandler}>
            Login
          </button>
        </form>
      </div>
      <Link to="/signup">Go to signup</Link>
    </div>
  );
};

export default Login;
