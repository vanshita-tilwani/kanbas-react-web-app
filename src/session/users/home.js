import React from "react";
import Header from "./header";
import Login from "./login";

function Home() {
  return (
    <div className="main_screen" >
      <div className="row">
      <Header/>
      <Login/>
      </div>
    </div>
  );
}

export default Home;