import React from "react";
import Header from "./header";
import Signin from "./signin";

function Nav() {
  return (
    <div className="main_screen" >
      <div className="row">
        <Header/>
      <Signin/>
      </div>
      
    </div>
  );
}

export default Nav;