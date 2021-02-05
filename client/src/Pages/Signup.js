import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:5000/user/signup",
      {
        name,
        email,
        password,
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
      alert("Sory some error occurred");
    }
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form className="signup__container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <br />
        <div className="button__container">
          <button type="submit" onClick={submitHandler}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
