import React from "react";

function DashboardHeader() {

  return (
    <div style={{backgroundColor : "black", maxHeight: "50px"}}>
      <div className="flex-1 flex items-center text-white" style={{display:"inline-flex"}}>
        <h3 style={{alignSelf : "center", font : "20px Lato", color:"white", margin: "15px"}}>Dashboard</h3>
      </div>
    </div>
    
  );
}

export default DashboardHeader;