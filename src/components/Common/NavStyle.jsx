import React from "react";
import { Link } from "react-router-dom";

function NavStyle({ link, name, classes }) {
    const isActive = window.location.pathname === link;
  return (
    <Link
      to={link}
      className="relative px-6 py-2 rounded-full font-medium overflow-hidden group transition-colors  hover:text-white"
    >
      <span
        className={`absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-xl ${isActive ? "scale-x-100 " : ""}`}
      ></span>

      <span className={`relative z-10 ${isActive ? "text-white" : ""}`}>
        {name}
      </span>
    </Link>
  );
}

export default NavStyle;
