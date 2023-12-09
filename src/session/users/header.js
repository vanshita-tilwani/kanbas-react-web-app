import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const register = async () => {
    try {
      navigate("/session/register");
    } catch (err) {
    }
  };

  return (
    <div style={{backgroundColor: "black"}} >
      <div className="flex-1 flex items-center text-white" style={{display:"inline-flex"}}>
        <img src={require("../../kanbas/kanbasnavigation/NU_logo.png")} width="80px" alt="logo" />
        <h3 style={{alignSelf : "center", font : "20px Lato", color:"white"}}>Northeastern University</h3>
      </div>
      <button onClick={register} style={{float: "right", width : "10%", margin: "20px"}} className="btn btn-danger">Register</button>
    </div>
    
  );
}

export default Header;