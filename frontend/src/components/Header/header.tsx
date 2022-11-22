import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <h1 className="header__title">
          <Link to="/" className="header__title_main">
            Employee Managment System
          </Link>
        </h1>
      </div>
      <button className="button button--new">
        <Link to={"/employee/new"}>Add Employee</Link>
      </button>
    </nav>
  );
};

export default Header;
