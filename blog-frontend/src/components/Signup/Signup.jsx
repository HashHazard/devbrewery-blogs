import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    if (token["mytoken"]) {
      navigate("/blogs");
    }
  }, [token]);
  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => setToken("mytoken", res.token))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: "100px" }}>
      <h1>Please Login</h1>
      <div>
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => {
            return setUsername(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.03 }}
        transition={{ ease: "easeInOut", duration: 0.1 }}
        className="signup-btn"
        onClick={handleLogin}
      >
        Sign Up
      </motion.button>

      <div>
        {isLogin ? (
          <h5>
            Don't have account, Please <button>Register</button>
          </h5>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Signup;
