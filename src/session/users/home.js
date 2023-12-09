import React from "react";
import Header from "./header";
import Signin from "./signin";

function Home() {
  return (
    <div className="main_screen" >
      <div className="row">
      <Header/>
      <Signin/>
      </div>
    </div>
  );
}

export default Home;