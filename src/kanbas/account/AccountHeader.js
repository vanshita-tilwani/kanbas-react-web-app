import React from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../../session/users/client";

function AccountHeader({account}) {
  const navigate = useNavigate();

  const signout = async () => {
    await client.signout();
    navigate("/session/home");
  };

  const navigatedToUserList = async() => {
    navigate("/session/admin/users")
  }

  return (
    <div style={{backgroundColor : "black", maxHeight: "50px"}}>
      <div className="flex-1 flex items-center text-white" style={{display:"inline-flex"}}>
        <h3 style={{alignSelf : "center", font : "20px Lato", color:"white", margin: "15px"}}>Account Information</h3>
      </div>
      { account && account.role === "ADMIN" && (
            <button onClick={navigatedToUserList} style={{float: "right", margin:"10px"}}  className="btn btn-danger">Users</button>)}
      

      <button onClick={signout} style={{float: "right", margin:"10px"}}  className="btn btn-danger">Log out</button>
    </div>
    
  );
}

export default AccountHeader;