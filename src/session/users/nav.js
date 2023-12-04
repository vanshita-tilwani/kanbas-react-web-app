import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  const links = [
    { to: "/session/signin", label: "Signin" },
    { to: "/session/signup", label: "Signup" },
  ];
  const active = (path) => (pathname.includes(path) ? "active" : "");
  return (
    <div className="list-group">
      <h1>Kanbas Application</h1>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`list-group-item ${active(link.to)}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Nav;