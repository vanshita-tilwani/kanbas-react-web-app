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
    <div className="main_container">

      <div className="login_container">
      <h3 className="white_font">Unlock the full potential of Kanbas!</h3>
      <p className="white_font">
      Kanbas is the home base for all Northeastern courses. Faculty and student resources are available to help maximize teaching and learning on the platform.
      </p>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter your username"
        className="form-control mb-3"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        placeholder="Enter your password"
        className="form-control mb-3"
      />
      <button onClick={signin} className="btn btn-danger w-100 mb-3">
        Login to Kanbas
      </button>
      </div>
      
    </div>
  );
}

export default Signin;
