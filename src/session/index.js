

import Register from "./users/register";
import Account from "../kanbas/account/index";
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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        
  );
}

export default Session;
