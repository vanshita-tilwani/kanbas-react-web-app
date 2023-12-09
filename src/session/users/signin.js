import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Signin() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(user);
      navigate("/kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <div className="login_container">
        <h3 className="white_font">Unlock the full potential of Kanbas!</h3>
        <p className="white_font">Kanbas is the home base for all Northeastern courses. Faculty and student resources are available to help maximize teaching and learning on the platform.</p>
        {error && <div className="alert alert-danger">{error}</div>}
        <label className="red_font mb-1" htmlFor="username">Username</label>
        <input
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter your username"
          className="form-control mb-3"
        />
        <label className="red_font mb-1" htmlFor="password">Password</label>
        <input
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          placeholder="Enter your password"
          className="form-control mb-3"
        />
      <button onClick={signin} style={{marginLeft: "100px"}} className="btn btn-danger w-50 mb-6">
        Login to Kanbas
      </button>
      </div>
      
    </div>
  );
}

export default Signin;
