

import Signin from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import UserTable from "./users/table";
import Nav from "./users/nav";

function Session() {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-10">
          <Routes>
            <Route path="/nav" element={<Nav/>}/>
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/" element={<Navigate to="/session/nav" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Session;
