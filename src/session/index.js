

import Signup from "./users/signup";
import Account from "./users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import UserTable from "./users/table";
import Home from "./users/home";
import Login from "./users/login";

function Session() {
  return (
      
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/" element={<Navigate to="/session/home" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        
  );
}

export default Session;
