import React from "react";
import { useNavigate } from "react-router-dom";

function Header({isHomeScreen = true}) {
  const navigate = useNavigate();
  const register = async () => {
    try {
      navigate("/session/register");
    } catch (err) {
    }
  };

  const home = async () => {
    try {
      navigate("/session/home");
    } catch (err) {
    }
  };

  var label = isHomeScreen ? "Register" : "Login";
  return (
    <div style={{backgroundColor: "black"}} >
      <div className="flex-1 flex items-center text-white" style={{display:"inline-flex"}}>
        <img src={require("../../kanbas/kanbasnavigation/NU_logo.png")} width="80px" alt="logo" />
        <h3 style={{alignSelf : "center", font : "20px Lato", color:"white"}}>Northeastern University</h3>
      </div>
      <button onClick={isHomeScreen ? register : home} style={{float: "right", width : "10%", margin: "20px"}} className="btn btn-danger">{label}</button>
    </div>
    
  );
}

export default Header;