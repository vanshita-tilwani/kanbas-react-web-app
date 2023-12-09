import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Register() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const register = async () => {
    try {
      await client.register(user);
      navigate("/kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="login_container">
      <h3 className="white_font">Kanbas Registration</h3>
      <p className="white_font">Experience the hustle! Register and keep track of your day to day schedule</p>

      {error && <div className="alert alert-danger">{error}</div>}
      <label className="red_font mb-1" htmlFor="username">Username</label>
        <input
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter your username"
          className="form-control mb-2"
        />
        <label className="red_font mb-1" htmlFor="password">Password</label>
        <input
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          placeholder="Enter your password"
          className="form-control mb-2"
        />
        <label className="red_font mb-1" htmlFor="firstname">Firstname</label>
        <input
          id="firstname"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          placeholder="Enter your first name"
          className="form-control mb-2"
        />
        <label className="red_font mb-1" htmlFor="lastname">Lastname</label>
        <input
          id="lastname"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          placeholder="Enter your last name"
          className="form-control mb-2"
        />
      <button onClick={register} style={{marginLeft: "100px"}} className="btn btn-danger w-50 mb-6">
        Register to Kanbas
      </button>
    </div>
  );
}

export default Register;
