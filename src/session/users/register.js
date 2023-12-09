import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Register() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const register = async () => {
    try {
      await client.signup(user);
      navigate("/kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="w-50">
      <h1>Register</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        placeholder="password"
        className="form-control mb-2"
      />
      <button onClick={register} className="btn btn-primary w-100">
        Register
      </button>
    </div>
  );
}

export default Register;
