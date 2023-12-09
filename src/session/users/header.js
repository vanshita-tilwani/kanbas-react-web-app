import React from "react";

function Header() {
  return (
    <div style={{display:"inline-flex", backgroundColor: "black"}}>
      <img src={require("../../kanbas/kanbasnavigation/NU_logo.png")} width="80px" alt="logo" />
      <h3 style={{alignSelf : "center", font : "20px Lato", color:"white"}}>Northeastern University</h3>
    </div>
    
  );
}

export default Header;